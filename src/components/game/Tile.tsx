import './Tile.css'
import {Piece as PieceType} from '../../ts/fen/parser'
import Piece from './Piece'
import {onMount} from 'solid-js'

function Tile(props: {piece: PieceType | null, number: number, color: "black" | "white"}) {
	const dragOver = (ev: Event) => {
		console.log(ev.data)
		ev.preventDefault()
	}
	return <div id={`dropzone-${props.number}`} ondragend={dragOver} data-number={props.number} class={`tile tile-${props.color}`}>
		<Piece piece={props.piece} />
	</div>
}

export default Tile
