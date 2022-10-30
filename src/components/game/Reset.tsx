import './Reset.css'

function Reset (props: { onReset: () => void }) {
  return <button onClick={props.onReset} class="reset-btn">Reset</button>
}

export default Reset
