import { createContext, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'

export type Color = 'white' | 'black'
export enum GameState {
  MOVE = 'move',
  CHECKMATE = 'checkmate',
  RESIGNED = 'resigned',
  STALEMATE = 'stalemate'
}

export interface GameInfo {
  playerColor: Color
  isAi: boolean
  position: string
  displayColor: Color
  status: {
    state: GameState
    player: Color
  }
}

type GameContextType = [
  GameInfo,
  {
    setPlayerColor(color: Color): void
    setPosition(position: string): void
    setIsAi(value: boolean): void
    setDisplayColor(color: Color): void
    setStatus(player: Color, state: GameState): void
  }
]
const GameContext = createContext<GameContextType>()

export function GameContextProvider(props: any) {
  const [gameContext, setGameContext] = createStore<GameInfo>({
    playerColor: 'white',
    position: '',
    isAi: false,
    displayColor: 'white',
    status: {
      player: 'white',
      state: GameState.MOVE
    }
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
      },
      setDisplayColor(color: Color) {
        setGameContext('displayColor', color)
      },
      setStatus(player: Color, state: GameState) {
        setGameContext('status', { player, state })
      }
    }
  ] as GameContextType
  return (
    <GameContext.Provider value={game}>{props.children}</GameContext.Provider>
  )
}

export const useGame = () => useContext(GameContext)
