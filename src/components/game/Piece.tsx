import { Show } from "solid-js";
import { Piece as PieceType } from "../../ts/fen/parser";
import "./Piece.css";

function Piece(props: { x: number; y: number; piece: PieceType | null }) {
  const drag = (ev: any) => {
    const data = JSON.stringify({ piece: props.piece, x: props.x, y: props.y });
    ev.dataTransfer.setData("text", data);
  };

  return (
    <Show when={props.piece !== null}>
      <img
        id={`${props.piece?.color}-${props.piece?.type}-${props.x}${props.y}`}
        draggable={true}
        ondragstart={drag}
        class="piece"
        src={`pieces/${props.piece?.color}_${props.piece?.type}.svg`}
      ></img>
    </Show>
  );
}

export default Piece;
