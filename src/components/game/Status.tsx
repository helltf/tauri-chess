import { useGame } from '../../context/gameContext'
import './Status.css'

const Status = () => {
  const [gameContext] = useGame()!
  return (
    <div class="status-wrapper">
      <p>{gameContext.state}</p>
      <div
        class="color-pane"
        style={{
          'background-color': gameContext.sideToMove
        }}
      />
    </div>
  )
}

export default Status
