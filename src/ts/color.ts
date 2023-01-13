import { Color } from '../context/gameContext'

export const invertColor = (color: Color): Color =>
  color === 'white' ? 'black' : 'white'
