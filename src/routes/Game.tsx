import Board from '../components/game/Board'
import Reset from '../components/game/Reset'
import './Game.css'
function Game() {
	return (
		<div class='game'>
			<Board></Board>
			<Reset></Reset>
		</div >
	)
}

export default Game
