import '../../App.css'
import { Link } from 'react-router-dom'

function Billing() {
	return (
		<>
			<form>
				<div class="form-group">
				  <label>Name on Card</label>
				    <input type="text" className="form-control" name="name" />
				  </div>  
				<div class="form-group">
				  <label>Card Type</label>
				    <input type="text" className="form-control" name="name" />
				</div>
				<div class="form-row">
					<div class="form-group col-sm-7">
					  <label>Card details</label>
					    <input type="text" className="form-control" name="name" />
					</div>
					<div class="form-group col-sm-3">
					  <label>State</label>
					   <label>Expiry date</label>
					    <input type="text" className="form-control" name="name" />
					</div>
					<div class="form-group col-sm-2">
					  <label>State</label>
					   <label>CVV</label>
					    <input type="text" className="form-control" name="name" />
					</div>
				</div>	
			</form>	
			<div class="row">
					<div class="col-sm-10">
			  			<div class="row">
			  				<div class="col">
								<input type="submit" value="Next" />
							</div>
							<div class="col">
								<Link>Cancel Payment</Link>
							</div>
						</div>		
					</div>
				</div>		
		</>

	)
}

export default Billing