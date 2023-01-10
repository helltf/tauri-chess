import { createContext, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'

export type Color = 'white' | 'black'
export enum GameState {
  ONGOING = 'ongoing',
  CHECKMATE = 'checkmate',
  STALEMATE = 'stalemate'
}

export interface GameInfo {
  playerColor: Color
  isAi: boolean
  position: string
  displayColor: Color
  state: GameState
  sideToMove: Color
}

type GameContextType = [
  GameInfo,
  {
    setPlayerColor(color: Color): void
    setPosition(position: string): void
    setIsAi(value: boolean): void
    setDisplayColor(color: Color): void
    setStatus(state: GameState): void
    setSideToMove(color: Color): void
  }
]
const GameContext = createContext<GameContextType>()

export function GameContextProvider(props: any) {
  const [gameContext, setGameContext] = createStore<GameInfo>({
    playerColor: 'white',
    position: '',
    isAi: false,
    displayColor: 'white',
    state: GameState.ONGOING,
    sideToMove: 'white'
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
      setStatus(state: GameState) {
        setGameContext('state', state)
      },
      setSideToMove(color: Color) {
        setGameContext('sideToMove', color)
      }
    }
  ] as GameContextType
  return (
    <GameContext.Provider value={game}>{props.children}</GameContext.Provider>
  )
}

export const useGame = () => useContext(GameContext)
