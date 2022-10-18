import './Tile.css'
import { Piece as PieceType } from '../../ts/fen/parser'
import Piece from './Piece'
import { onMount } from 'solid-js'

function drop(ev: any) {
	ev.preventDefault()
	var data = ev.dataTransfer.getData('text')
	ev.target.appendChild(document.getElementById(data))
}

function allowDrop(ev: any) {
	ev.preventDefault()
}

function Tile(props: {
	piece: PieceType | null
	number: number
	color: 'black' | 'white'
}) {
	return (
		<div
			id={`dropzone-${props.number}`}
			ondragover={allowDrop}
			ondrop={drop}
			data-number={props.number}
			class={`tile tile-${props.color}`}
		>
			<Piece piece={props.piece} />
		</div>
	)
}

export default Tile
