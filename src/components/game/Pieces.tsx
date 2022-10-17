import {parse, Pieces as PiecesType} from '../../ts/fen/parser'

import {createSignal, onMount} from "solid-js";
import {invoke} from '@tauri-apps/api/tauri'
function Pieces() {
	const [pieces, setPieces] = createSignal([[]] as PiecesType)

	onMount(async () => {
		const position = await invoke<string>("greet")
		setPieces(parse(position))
		console.log(pieces())
	})

	return (<></>)


}

export default Pieces;
