import Tile from './Tile'
import './Board.css'
import { createSignal, For, onMount } from 'solid-js'
import { parse, Piece, Pieces } from '../../ts/fen/parser'
import { invoke } from '@tauri-apps/api/tauri'
import Reset from './Reset'
import Back from './Back'
import { useNavigate } from '@solidjs/router'
import SwapPosition from './SwapPosition'
import { Color, useGame } from '../../context/gameContext'
import Status from './Status'

function getColor(x: number, y: number): Color {
  let rowStartColor: Color = y % 2 ? 'white' : 'black'

  if (x % 2) {
    rowStartColor = rowStartColor === 'white' ? 'black' : 'white'
  }

  return rowStartColor
}

function Board() {
  const [board, setBoard] = createSignal([[]] as Pieces)
  const [gameContext, { setSideToMove, setStatus }] = useGame()!
  const navigate = useNavigate()

  onMount(async () => {
    try {
      await invoke('reset')
      const position =
        gameContext.position === ''
          ? await invoke<string>('get_position')
          : gameContext.position
      await invoke('set_position', { position })
      setBoard(parse(position))
    } catch (e: any) {
      navigate('/')
    }
  })

  const onReset = async () => {
    await invoke('set_position', {
      position: gameContext.position
    })
    setBoard(parse(gameContext.position))
    setStatus(await invoke('get_status'))
    setSideToMove(await invoke('get_player'))
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

    setStatus(await invoke('get_status'))
    setSideToMove(await invoke('get_player'))
    const newBoard = JSON.parse(JSON.stringify(board()))
    newBoard[y][x] = piece
    newBoard[fromY][fromX] = null
    setBoard(newBoard)
  }

  const getBoard = () =>
    gameContext.displayColor === 'white'
      ? board()
      : (JSON.parse(JSON.stringify(board())) as Piece[][])
          .reverse()
          .map((r) => r.reverse())

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
                />
              )}
            </For>
          )}
        </For>
      </div>
      <div class="buttons">
        <Reset onReset={onReset} />
        <Back />
        <SwapPosition />
        <Status />
      </div>
    </div>
  )
}

export default Board
