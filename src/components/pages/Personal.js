import '../../App.css'
import { Link } from 'react-router-dom'

function Personal () {
	return (
		<>
			<form>
				<div class="form-group">
				  <label>Name</label>
				    <input type="text" className="form-control" name="name" />
				  </div>  
				<div class="form-group">
				  <label>Email Address</label>
				    <input type="text" className="form-control" name="name" />
				</div>
				<div class="form-group">
				  <label>Address`1</label>
				    <input type="text" className="form-control" name="name" />
				</div>
				<div class="form-group">
				  <label>Address 2</label>
				    <input type="text" className="form-control" name="name" />
				</div>
				<div class="form-row">
					<div class="form-group col-sm-8">
					  <label>Local Government</label>
					    <input type="text" className="form-control" name="name" />
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
								<input type="submit" value="Next" />
							</div>
							<div class="col">
								<Link>Cancel Payment</Link>
							</div>
						</div>		
					</div>
				</div>		


			</form>
		</>
	)
}

export default Personal