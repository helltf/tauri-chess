import {A} from '@solidjs/router'
import './Start.css'

function Start() {
	return (
		<main class='main-view'>
			<h1 class='main-headline'>Chess</h1>
			<A class='game-btn' href="/game">Start a Game</A>
		</main>
	)
}

export default Start
