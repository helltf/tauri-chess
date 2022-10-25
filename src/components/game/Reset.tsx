import './Reset.css'

function Reset(props: {onReset: () => void}){
	return <button onclick={props.onReset} class="reset-btn">Reset</button>
}

export default Reset; 
