import {Show} from "solid-js";
import {Piece as PieceType} from "../../ts/fen/parser";
import './Piece.css'

function Piece(props: {piece: PieceType | null}) {
	return (
		<Show when={props.piece !== null}>
			<div draggable={true} class="piece">
				<img src={`pieces/${props.piece?.color}_${props.piece?.type}.svg`}></img>
			</div>
		</Show>
	)
}

export default Piece;
