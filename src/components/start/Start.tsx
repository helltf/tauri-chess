import {A, useNavigate} from '@solidjs/router'
import {createSignal} from 'solid-js'
import './Start.css'

function Start() {
	const [position, setPosition] = createSignal(null)
	const navigate = useNavigate()

	const startGame = () => {
		navigate('/game', {state: {position: position()}})
	}

	return (
		<main class='main-view'>
			<h1 class='main-headline'>Chess</h1>
			<button onclick={startGame} class='game-btn'>Start a Game</button>
		</main>
	)
}

export default Start
