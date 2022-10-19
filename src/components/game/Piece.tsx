import {onMount, Show} from 'solid-js'
import {Piece as PieceType} from '../../ts/fen/parser'
import './Piece.css'


function Piece(props: {number: number, piece: PieceType | null, onDragStart: (ev: Event) => void}) {
	const drag = (ev: any) => {
		const data = JSON.stringify(props.piece)
		ev.dataTransfer.setData('text', data)
	}

	const dragend = (ev: any) => {
		props.onDragStart(ev)
	}

	return (
		<Show when={props.piece !== null}>
			<img
				id={`${props.piece?.color}-${props.piece?.type}-${props.number}`}
				draggable={true}
				ondragstart={drag}
				ondragend={dragend}
				class='piece'
				src={`pieces/${props.piece?.color}_${props.piece?.type}.svg`}
			></img>
		</Show>
	)
}

export default Piece
