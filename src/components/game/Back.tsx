import { useNavigate } from '@solidjs/router'
import './Back.css'

export default function Back() {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/')
  }

  return (
    <button onClick={onClick} class="back-btn">
      Back
    </button>
  )
}
