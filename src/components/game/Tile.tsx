import './Tile.css'
import {Piece as PieceType} from '../../ts/fen/parser'
import Piece from './Piece'

function Tile(props: {piece: PieceType, number: number, color: "black" | "white"}) {
	return <div data-number={props.number} class={`tile tile-${props.color}`}>
<Piece piece={props.piece}/>
	</div>
}

export default Tile
