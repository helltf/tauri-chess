import Tile from './Tile'
import './Board.css'
import { createSignal, For, onMount, Signal } from 'solid-js'
import { parse, Piece, Pieces } from '../../ts/fen/parser'
import { invoke } from '@tauri-apps/api/tauri'
import Reset from './Reset'
import Back from './Back'
import { useLocation, useNavigate } from '@solidjs/router'
import SwapPosition from './SwapPosition'
import { ContextType, useGame } from '../../context/gameContext'

type Color = 'black' | 'white'

interface GameInfo {
  position: string | null
  settings: {
    isAi: boolean
  }
}

function getColor(x: number, y: number): Color {
  let rowStartColor: Color = y % 2 ? 'white' : 'black'

  if (x % 2) {
    rowStartColor = rowStartColor === 'white' ? 'black' : 'white'
  }

  return rowStartColor
}

function Board() {
  const [board, setBoard] = createSignal([[]] as Pieces)
  const [gameContext] = useGame() as any
  const [displayColor, setDisplayColor]: Signal<Color> = createSignal('black')
  const navigate = useNavigate()

  onMount(async () => {
    try {
      const position = gameContext.position ?? (await invoke<string>('get_position'))
      await invoke('set_position', { position })
      setBoard(parse(position))
    } catch (e: any) {
      navigate('/')
    }
  })

  const onReset = async () => {
    await invoke('reset')
    const currentPosition = await invoke<string>('get_position')
    setBoard(parse(currentPosition))
  }

  const onMove = async (
    piece: Piece,
    x: number,
    y: number,
    fromX: number,
    fromY: number
  ) => {
    try {
      await invoke('action', { x, y, fromX, fromY })
    } catch (e) {
      return console.error(e)
    }
    const newBoard = JSON.parse(JSON.stringify(board()))
    newBoard[y][x] = piece
    newBoard[fromY][fromX] = null
    setBoard(newBoard)
  }

  const getBoard = () =>
    displayColor() === 'white'
      ? board()
      : (JSON.parse(JSON.stringify(board())) as Piece[][])
          .reverse()
          .map((r) => r.reverse())

  const onSwap = () => {
    setDisplayColor(displayColor() === 'white' ? 'black' : 'white')
  }

  return (
    <div class="game">
      <div id="board" class="board">
        <For each={getBoard()}>
          {(row, rowIndex) => (
            <For each={row}>
              {(p, colIndex) => (
                <Tile
                  onMove={onMove}
                  x={colIndex()}
                  y={rowIndex()}
                  color={getColor(colIndex(), rowIndex())}
                  piece={p}
                  displayColor={displayColor()}
                />
              )}
            </For>
          )}
        </For>
      </div>
      <div class="buttons">
        <Reset onReset={onReset} />
        <Back />
        <SwapPosition onSwap={onSwap} />
      </div>
    </div>
  )
}

export default Board
