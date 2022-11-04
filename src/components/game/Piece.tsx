import { Show } from 'solid-js'
import { useGame } from '../../context/gameContext'
import { Piece as PieceType } from '../../ts/fen/parser'
import './Piece.css'

function Piece(props: { x: number; y: number; piece: PieceType | null }) {
  const [gameContext] = useGame()!
  const drag = (ev: any) => {
    const data = JSON.stringify({ piece: props.piece, x: props.x, y: props.y })
    ev.dataTransfer.setData('text', data)
  }

  const isDraggabble = () =>
    gameContext.isAi && props.piece?.color === gameContext.playerColor

  return (
    <Show when={props.piece !== null}>
      <img
        id={`${props.piece?.color}-${props.piece?.type}-${props.x}${props.y}`}
        draggable={isDraggabble()}
        onDragStart={drag}
        class="piece"
        src={`pieces/${props.piece?.color}_${props.piece?.type}.svg`}
      />
    </Show>
  )
}

export default Piece
