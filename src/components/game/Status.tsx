import { useGame } from '../../context/gameContext'

const Status = () => {
  const [gameContext] = useGame()!
  return <p>{gameContext.state + '' + gameContext.sideToMove} </p>
}

export default Status
