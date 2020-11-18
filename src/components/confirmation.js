import { Link } from 'react-router-dom'

function Confirmation() {
	return(
		<>
		<h2>Purchase Completed</h2>
		<p>Please check your email for details concerning the transaction </p>
		<Link to="/">Return Home</Link>
		</>
	) 
}

export default Confirmation