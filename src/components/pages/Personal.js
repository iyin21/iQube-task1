import '../../App.css'
import { Link } from 'react-router-dom'

function Personal () {
	return (
		<>
			<form className="weight">
				<div class="form-group">
				  <label>Name</label>
				    <input type="text" className="form-control form-control-lg" placeholder="Opara Linus Ahmed" name="name" />
				  </div>  
				<div class="form-group">
				  <label>Email Address</label>
				    <input type="text" className="form-control form-control-lg" placeholder="OparaLinusAhmed@devmail.com" name="name" />
				</div>
				<div class="form-group">
				  <label>Address`1</label>
				    <input type="text" className="form-control form-control-lg" placeholder="The address of the user goes here"  name="name" />
				</div>
				<div class="form-group">
				  <label>Address 2</label>
				    <input type="text" className="form-control form-control-lg" placeholder="and here"name="name" />
				</div>
				<div class="form-row">
					<div class="form-group col-sm-8">
					  <label>Local Government</label>
					    <input type="text" className="form-control form-control-lg" placeholder="Surulere" name="name" />
					</div>
					<div class="form-group col-sm-4">
					  <label>State</label>
					    <select class="form-control">
							<option value="Lagos">Lagos</option>
						</select>
					</div>
				</div>	
				<div class="row">
					<div class="col-sm-10">
			  			<div class="row">
			  				<div class="col">
								<input className="btn button1"type="submit" value="Next" />
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

export default Personal