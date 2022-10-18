import {Show} from "solid-js";
import {Piece as PieceType} from "../../ts/fen/parser";
import './Piece.css'

function Piece(props: {piece: PieceType | null}) {
	const log = (ev: DragEvent) => {
		ev.dataTransfer?.setData('text', ev.target?.id)
	}
	return (

		<Show when={props.piece !== null}>
			<img draggable={true} ondragstart={log} class="piece" src={`pieces/${props.piece?.color}_${props.piece?.type}.svg`}></img>
		</Show>
	)
}

export default Piece;
