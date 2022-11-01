import { useNavigate } from '@solidjs/router'
import { createSignal, Signal } from 'solid-js'
import './Start.css'

function Start() {
  const [position, setPosition]: Signal<string | null> = createSignal(null)
  const [isAi, setIsAi] = createSignal(false)
  const navigate = useNavigate()

  const startGame = () => {
    navigate('/game', {
      state: { position: position(), settings: { isAi: isAi() } }
    })
  }

  return (
    <main class="main-view">
      <h1 class="main-headline">Chess</h1>
      <input
        class="fen-input"
        placeholder="Start from position"
        onInput={(event) => setPosition(event.data)}
      />
      <div class="game-type-select">
        <button
          onClick={(_) => setIsAi(false)}
          class={`game-type-btn ${isAi() ? '' : 'selected'}`}
        >
          Player
        </button>
        <button
          onClick={(_) => setIsAi(true)}
          class={`game-type-btn ${isAi() ? 'selected' : ''}`}
        >
          AI
        </button>
      </div>
      <button onClick={startGame} class="game-btn">
        Start a Game
      </button>
    </main>
  )
}

export default Start
