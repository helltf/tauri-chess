import {parse} from '../../ts/fen/parser'

function Pieces(props: {fen: string}) {
	const pieces = parse(props.fen)
	console.log("Render pieces")
	console.log(pieces)
	return (<h1>{pieces.toString()}</h1>)
}

export default Pieces;
