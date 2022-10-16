import {For} from "solid-js";
import Tile from "./Tile";
import './Board.css'

function Board() {
	return (<div class="board">
		<For each={Array(64).fill("1")}>{(_, i) =>
			<Tile />}
		</For>
	</div>)
}

export default Board
