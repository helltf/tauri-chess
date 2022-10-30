import './App.css'
import { Route, Routes } from '@solidjs/router'
import Main from './routes/Main'
import Game from './routes/Game'

function App () {
  return (
    <Routes>
      <Route component={Main} path="/" />
      <Route component={Game} path="/game" />
    </Routes>
  )
}

export default App
