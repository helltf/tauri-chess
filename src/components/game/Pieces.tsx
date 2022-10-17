import {parse, Piece as PieceType} from '../../ts/fen/parser'
import Piece from './Piece'
import {createSignal, For, onMount} from "solid-js";
import {invoke} from '@tauri-apps/api/tauri'
import './Pieces.css'

interface PieceElement {
	piece: PieceType
	xIndex: number,
	yIndex: number
}
function Pieces() {
	const [pieces, setPieces] = createSignal([] as PieceElement[])

	onMount(async () => {
		const position = await invoke<string>("greet")
		const board = parse(position)
		const elements: PieceElement[] = board.reduce((pieces, currentRow, index) => {
			const rowElements = currentRow.reduce((pieces, currentPiece, colIndex) => {
				if (currentPiece === null) return pieces

				const piece: PieceElement = {piece: currentPiece, yIndex: index, xIndex: colIndex}
				pieces.push(piece)
				return pieces
			}, [] as PieceElement[])

			pieces.push(...rowElements)
			return pieces
		}, [] as PieceElement[])

		setPieces(elements)
	})

	return (<>
		<For each={pieces()}>{(p, i) => <Piece xIndex={p.xIndex} yIndex={p.yIndex} piece={p.piece}></Piece>}</For> </>)


}

export default Pieces;
