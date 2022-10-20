import Tile from './Tile'
import './Board.css'
import {createSignal, For} from 'solid-js'
import {parse, Piece, Pieces} from '../../ts/fen/parser'
import {invoke} from '@tauri-apps/api/tauri'
import {onMount} from 'solid-js'

type Color = 'black' | 'white'

function getColor(x: number, y: number): Color {
	let rowStartColor: Color = y % 2 ? 'white' : 'black'

	if (x % 2) {
		rowStartColor = rowStartColor === 'white' ? 'black' : 'white'
	}

	return rowStartColor
}

function Board() {
	const [board, setBoard] = createSignal([[]] as Pieces)

	onMount(async () => {
		const position = await invoke<string>('get_position')
		setBoard(parse(position))
	})

	const onMove = async (piece: Piece, x: number, y: number, fromX: number, fromY: number) => {
		try {
			const result = await invoke('action', {piece, x, y, fromX, fromY})
		} catch (e) {
			return console.error(e)
		}
		const newBoard = JSON.parse(JSON.stringify(board()))

		newBoard[y][x] = piece
		newBoard[fromY][fromX] = null
		setBoard(newBoard)
	}

	return (
		<>
			<div id='board' class='board'>
				<For each={board()}>
					{(row, rowIndex) => (
						<For each={row}>
							{(p, colIndex) => (
								<Tile
									onMove={onMove}
									x={colIndex()}
									y={rowIndex()}
									color={getColor(colIndex(), rowIndex())}
									piece={p}
								/>
							)}
						</For>
					)}
				</For>
			</div>
		</>
	)
}

export default Board
