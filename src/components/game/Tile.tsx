import './Tile.css'
import {Piece as PieceType} from '../../ts/fen/parser'
import Piece from './Piece'


function allowDrop(ev: any) {
	ev.preventDefault()
}

function Tile(props: {
	piece: PieceType | null
	x: number
	y: number
	color: 'black' | 'white'
	onMove: (p: PieceType, x: number, y: number, fromX: number, fromY:number) => void
}) {

	const drop = (ev: any) => {
		ev.preventDefault()
		let data = JSON.parse(ev.dataTransfer.getData('text')) as {piece: PieceType, x: number, y: number}
		props.onMove(data.piece, props.x, props.y, data.x, data.y)
	}

	return (
		<div
			id={`tile-${props.x}-${props.y}`}
			ondragover={allowDrop}
			ondrop={drop}
			class={`tile tile-${props.color}`}
		>
			<Piece x={props.x} y={props.y} piece={props.piece} />
		</div>
	)
}

export default Tile
