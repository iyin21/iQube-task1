import '../../App.css'

function Personal () {
	return (
		<>
			<form>
				<div class="form-group">
				  <label>
				    Name
				    <input type="text" name="name" />
				  </label>
				  <input type="submit" value="Submit" />
				</div>
				<div class="form-group">
				  <label>
				    Email Address
				    <input type="text" name="name" />
				  </label>
				  <input type="submit" value="Submit" />
				</div>
				<div class="form-group">
				  <label>
				    Address`1
				    <input type="text" name="name" />
				  </label>
				  <input type="submit" value="Submit" />
				</div>
				<div class="form-group">
				  <label>
				    Address 2
				    <input type="text" name="name" />
				  </label>
				  <input type="submit" value="Submit" />
				</div>
				<div class="form-row">
					<div class="form-group col-sm-8">
					  <label>
					    Local Government
					    <input type="text" name="name" />
					  </label>
					  <input type="submit" value="Submit" />
					</div>
					<div class="form-group col-sm-8">
					  <label>
					    State
					    <input type="text" name="name" />
					  </label>
					  <input type="submit" value="Submit" />
					</div>
				</div>	
			</form>
		</>
	)
}

export default Personal