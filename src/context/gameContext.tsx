import {
  Context,
  createContext,
  createSignal,
  useContext,
  Signal
} from 'solid-js'
import { createStore } from 'solid-js/store'

type Color = 'white' | 'black'

interface GameContext {
  playerColor: Color
  isAi: boolean
  position: string
}

const AiContext = createContext()

export function GameContextProvider(props: any) {
  const [gameContext, setGameContext] = createStore<GameContext>({
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
  return <AiContext.Provider value={game}>{props.children}</AiContext.Provider>
}

export const useGame = () => useContext(AiContext)
