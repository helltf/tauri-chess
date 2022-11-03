import './Tile.css'
import { Piece as PieceType } from '../../ts/fen/parser'
import Piece from './Piece'

type Color = 'black' | 'white'

function Tile(props: {
  piece: PieceType | null
  x: number
  y: number
  color: Color
  displayColor: Color
  onMove: (
    p: PieceType,
    x: number,
    y: number,
    fromX: number,
    fromY: number
  ) => void
}) {
  const getX = () => (props.displayColor === 'white' ? props.x : 7 - props.x)
  const getY = () => (props.displayColor === 'white' ? props.y : 7 - props.y)

  const allowDrop = (ev: any) => {
    // if (isAi() && props.color !== props.displayColor) return
    ev.preventDefault()
  }
  const drop = (ev: any) => {
    ev.preventDefault()
    const data = JSON.parse(ev.dataTransfer.getData('text')) as {
      piece: PieceType
      x: number
      y: number
    }
    props.onMove(data.piece, getX(), getY(), data.x, data.y)
  }

  return (
    <div
      id={`tile-${getX()}-${getY()}`}
      onDragOver={allowDrop}
      onDrop={drop}
      class={`tile tile-${props.color}`}
    >
      <Piece x={getX()} y={getY()} piece={props.piece} />
    </div>
  )
}

export default Tile
