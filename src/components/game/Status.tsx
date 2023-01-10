import { useGame } from '../../context/gameContext'

const Status = () => {
  const [gameContext] = useGame()!
  return <p>{gameContext.state} </p>
}

export default Status
