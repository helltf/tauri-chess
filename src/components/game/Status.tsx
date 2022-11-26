import { useGame } from '../../context/gameContext'

const Status = () => {
  const [gameContext] = useGame()!
  return <p>{gameContext.status.state + ' ' + gameContext.status.player}</p>
}

export default Status
