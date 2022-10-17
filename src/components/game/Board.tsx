import {createEffect, createSignal, For, onMount} from "solid-js";
import {invoke} from '@tauri-apps/api/tauri'
import Tile from "./Tile";
import './Board.css'
import Pieces from "./Pieces";

type Color = 'black' | 'white'

function getColor(index: number): Color {
	const row = Math.floor(index / 8)

	let rowStartColor: Color = row % 2 ? 'white' : 'black'

	if (index % 2) {
		rowStartColor = rowStartColor === 'white' ? 'black' : 'white'
	}

	return rowStartColor
}

const [position, setPosition] = createSignal('')
onMount(async () => {
		setPosition(await invoke("greet"))
		console.log("Updating position")
	})

function Board() {
	return (<div class="board">
		<For each={Array(64).fill("1")}>{(_, i) =>
			<Tile number={i()} color={getColor(i())} />}
		</For>
		<Pieces fen={position()} ></Pieces>
	</div>)
}

export default Board
