import '../../App.css'
import { Link } from 'react-router-dom'

function Billing() {
	return (
		<>
			<form className="weight">
				<div class="form-group">
				  <label>Name on Card</label>
				    <input type="text" className="form-control form-control-lg" placeholder="Opara Linus Ahmed" name="name" />
				  </div>  
				<div class="form-group">
				  <label>Card Type</label>
				    <input type="text" className="form-control form-control-lg" placeholder="Visa" name="name" />
				</div>
				<div class="form-row">
					<div class="form-group col-sm-7">
					  <label>Card details</label>
					    <input type="number" className="form-control form-control-lg"placeholder="449604496044960" name="name" />
					</div>
					<div class="form-group col-sm-3">
					   <label>Expiry date</label>
					    <input type="text" className="form-control form-control-lg" placeholder="04/23"name="name" />
					</div>
					<div class="form-group col-sm-2">
					   <label>CVV</label>
					    <input type="text" className="form-control form-control-lg" placeholder="923"name="name" />
					</div>
				</div>	
				<div class="row">
					<div class="col-sm-10">
			  			<div class="row">
			  				<div class="col">
								<input type="submit" className="btn button1" value="Next" />
							</div>
							<div class="col">
								<Link className="link2">Cancel Payment</Link>
							</div>
						</div>		
					</div>
			</div>		
			</form>	
		</>

	)
}

export default Billing