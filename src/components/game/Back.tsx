import { useNavigate } from '@solidjs/router'

export default function Back() {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/')
  }

  return (
    <button onClick={onClick} class="back-btn side-btn">
      Back
    </button>
  )
}
