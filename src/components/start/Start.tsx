import { A } from '@solidjs/router'
import { useGame } from '../../context/gameContext'
import './Start.css'

function Start() {
  const [gameContext, { setIsAi, setPosition }] = useGame()!

  return (
    <main class="main-view">
      <h1 class="main-headline">Chess</h1>
      <div class="game-settings">
        <input
          class="fen-input"
          placeholder="Start from position"
          value={gameContext.position}
          onInput={(e) => setPosition(e.currentTarget.value)}
        />
        <div class="game-type-select">
          <button
            onClick={(_) => setIsAi(false)}
            class={`game-type-btn ${gameContext.isAi ? '' : 'selected'}`}
          >
            Player
          </button>
          <button
            onClick={(_) => setIsAi(true)}
            class={`game-type-btn ${gameContext.isAi ? 'selected' : ''}`}
          >
            AI
          </button>
        </div>
        <A href="/game" class="game-btn">
          Start a Game
        </A>
      </div>
    </main>
  )
}

export default Start
