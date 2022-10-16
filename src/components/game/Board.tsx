import {createEffect, createSignal, For} from "solid-js";
import {invoke} from '@tauri-apps/api/tauri'
import Tile from "./Tile";
import './Board.css'

function getColor(index: number): 'black' | 'white' {
	const row = Math.floor(index / 8)

	let rowStartColor: 'black' | 'white' = row % 2 ? 'white' : 'black'

	if (index % 2) {
		rowStartColor = rowStartColor === 'white' ? 'black' : 'white'
	}

	return rowStartColor
}

const [position, setPosition] = createSignal('')

createEffect(async () => {
	setPosition(await invoke("greet"))
}, [position])

function Board() {
	return (<div class="board">
		<For each={Array(64).fill("1")}>{(_, i) =>
			<Tile number={i()} color={getColor(i())} />}
		</For>
	</div>)
}

export default Board
