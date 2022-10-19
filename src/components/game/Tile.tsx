import './Tile.css'
import {Piece as PieceType} from '../../ts/fen/parser'
import Piece from './Piece'
import {createSignal, onMount} from 'solid-js'


function allowDrop(ev: any) {
	ev.preventDefault()
}

function Tile(props: {
	piece: PieceType | null
	number: number
	color: 'black' | 'white'
}) {
	const [piece, setPiece] = createSignal(props.piece)

	const drop = (ev: any) => {
		ev.preventDefault()
		let data = JSON.parse(ev.dataTransfer.getData('text')) as PieceType
		setPiece(data)
	}

	const onDragStart = (ev: Event) => {
		setPiece(null)
	}

	return (
		<div
			id={`dropzone-${props.number}`}
			ondragover={allowDrop}
			ondrop={drop}
			data-number={props.number}
			class={`tile tile-${props.color}`}
		>
			<Piece onDragStart={onDragStart} number={props.number} piece={piece()} />
		</div>
	)
}

export default Tile
