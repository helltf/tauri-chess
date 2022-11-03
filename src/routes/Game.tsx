import Board from '../components/game/Board'
import { AiProvider } from '../context/ai'
import './Game.css'

function Game() {
  return (
    <AiProvider>
      <Board />
    </AiProvider>
  )
}

export default Game
