import { onMount, Show } from 'solid-js'
import { Piece as PieceType } from '../../ts/fen/parser'
import './Piece.css'

function drag(ev: any) {
	ev.dataTransfer.setData('text', ev.target.id)
}

function Piece(props: { piece: PieceType | null }) {
	return (
		<Show when={props.piece !== null}>
			 <img
			 	id={`${props.piece?.color}-${props.piece?.type}`}
				draggable={true}
				ondragstart={drag}
				class='piece'
				src={`pieces/${props.piece?.color}_${props.piece?.type}.svg`}
			></img>
		</Show>
	)
}

export default Piece
