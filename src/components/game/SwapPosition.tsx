export default function SwapPosition(props: { onSwap: () => void }) {
  return (
    <button class="side-btn" onClick={props.onSwap}>
      Swap Color
    </button>
  )
}
