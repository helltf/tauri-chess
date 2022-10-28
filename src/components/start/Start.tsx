import {A, useNavigate} from '@solidjs/router'
import {createSignal, Signal} from 'solid-js'
import './Start.css'

function Start() {
	const [position, setPosition]: Signal<string | null> = createSignal(null)
	const navigate = useNavigate()

	const startGame = () => {
		navigate('/game', {state: {position: position()}})
	}

	return (
		<main class='main-view'>
			<h1 class='main-headline'>Chess</h1>
			<input onInput={event => setPosition(event.data)} />
			<button onclick={startGame} class='game-btn'>Start a Game</button>
		</main>
	)
}

export default Start
