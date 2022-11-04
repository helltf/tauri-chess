import { useGame } from '../../context/gameContext'

export default function SwapPosition() {
  const [gameContext, { setDisplayColor }] = useGame()!

  const onSwap = () => {
    setDisplayColor(gameContext.displayColor === 'white' ? 'black' : 'white')
  }

  return (
    <button class="side-btn" onClick={onSwap}>
      Swap Color
    </button>
  )
}
