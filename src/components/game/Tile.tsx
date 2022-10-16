import './Tile.css'

function Tile(props: {number: number, color: "black" | "white"}) {
	return <div style="color: red;" class={`tile tile-${props.color}`}>{props.number}</div>
}

export default Tile
