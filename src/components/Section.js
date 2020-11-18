import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

function Section() {
	const [click, setClick] =useState(false);
	//const closeMobileMenu = () => setClick(false);
	return (
		<div className="App-header">
			<h3 className="header">Complete your Purchase</h3>
			<ul className="nav">
				<li className="nav-item pad-left ">
					<Link to="/personal" className="nav-link active">Personal Info</Link>
				</li>
				<li className="nav-item">
					<Link to="/billing" className="nav-link">Billing Info</Link>
				</li>
				<li className="nav-item">
					<Link to="/confirmation" className="nav-link">Confirm Payment</Link>
				</li>
			</ul>
		</div>		

	)
}

export default Section