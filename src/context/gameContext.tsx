import { createContext, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'

type Color = 'white' | 'black'

interface GameInfo {
  playerColor: Color
  isAi: boolean
  position: string
}

export type ContextType = Array<
  [
    GameInfo,
    {
      setPlayerColor(color: Color): void
      setPosition(position: string): void
      setIsAi(value: boolean): void
    }
  ]
>

const GameContext = createContext()

export function GameContextProvider(props: any) {
  const [gameContext, setGameContext] = createStore<GameInfo>({
    playerColor: 'white',
    position: '',
    isAi: false
  })

  const game = [
    gameContext,
    {
      setPlayerColor(color: Color) {
        setGameContext('playerColor', color)
      },
      setPosition(position: string) {
        setGameContext('position', position)
      },
      setIsAi(value: boolean) {
        setGameContext('isAi', value)
      }
    }
  ]
  return (
    <GameContext.Provider value={game}>{props.children}</GameContext.Provider>
  )
}

export const useGame = () => useContext(GameContext)
