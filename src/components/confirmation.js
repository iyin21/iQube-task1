import { Link } from 'react-router-dom'
import './Confirmation.css';

function Confirmation() {
	return(
		<>
		<style type="text/css">
	      {`.App-header {display: none}`},   
	    </style>
	    <div className="payment-container">
	    	<div className="check"><i className="fas fa-check"></i></div>
			<h2 className="purple">Purchase Completed</h2>
			<p>Please check your email for details concerning the transaction </p>
			<Link to="/" className="link1">Return Home</Link>
		</div>
		</>
	) 
}

export default Confirmation