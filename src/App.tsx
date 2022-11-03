import './App.css'
import { Route, Routes } from '@solidjs/router'
import Main from './routes/Main'
import Game from './routes/Game'
import { GameContextProvider } from './context/gameContext'

function App() {
  return (
    <GameContextProvider>
      <Routes>
        <Route component={Main} path="/" />
        <Route component={Game} path="/game" />
      </Routes>
    </GameContextProvider>
  )
}

export default App
