import {Piece as PieceType} from "../../ts/fen/parser";
import './Piece.css'

function Piece(props: {xIndex: number, yIndex: number, piece: PieceType}) {
	return (<div style={{left: `calc(100%/8 * ${props.xIndex})`, top: `calc(100%/8 * ${props.yIndex})`}} class="piece">
		<img src={`pieces/${props.piece.color}_${props.piece.type}.svg`}></img>
	</div>)
}

export default Piece;
