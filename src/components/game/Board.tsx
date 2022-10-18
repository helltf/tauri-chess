import Tile from './Tile'
import './Board.css'
import { createSignal, For } from 'solid-js'
import { parse, Piece, Pieces } from '../../ts/fen/parser'
import { invoke } from '@tauri-apps/api/tauri'
import { onMount } from 'solid-js'

type Color = 'black' | 'white'

function getColor(index: number): Color {
	const row = Math.floor(index / 8)

	let rowStartColor: Color = row % 2 ? 'white' : 'black'

	if (index % 2) {
		rowStartColor = rowStartColor === 'white' ? 'black' : 'white'
	}

	return rowStartColor
}

function Board() {
	const [board, setBoard] = createSignal([[]] as Pieces)

	onMount(async () => {
		// const position = await invoke<string>('greet')
		const position = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
		setBoard(parse(position))
	})

	return (
		<>
			<div class='board'>
				<For each={board().flatMap((v) => v)}>
					{(p, i) => (
						<>
							<Tile number={i()} color={getColor(i())} piece={p} />
						</>
					)}
				</For>
			</div>
		</>
	)
}

export default Board
