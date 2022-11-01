function Reset(props: { onReset: () => void }) {
  return (
    <button onClick={props.onReset} class="reset-btn side-btn">
      Reset
    </button>
  )
}

export default Reset
