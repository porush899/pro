import React from 'react'


export default function Contact(props) {
  return (
    <div style={{color: props.mode==='dark'? 'white':'#042743'}}>
      <div className="col-md-12 text-center">
      <h2>Welcome to Contact Page</h2>
      <br/>
      <h3>Please Fill the Form and Submit Your Response</h3>
      </div>
        <form className="row mr-10 text-center mt-5">
        <div className="col-md-6">
    <label for="firstname" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstname" placeholder='PORUSH'/>
  </div>
  <div className="col-md-6">
    <label for="lastname" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastname" placeholder='TYAGI'/>
  </div>
  <br/>
  <div className="col-md-6 mt-2">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" placeholder='abc@gmail.com'/>
  </div>
  <div className="col-md-6 mt-2">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" placeholder='Enter ur Password here'/>
  </div>
  <div className="col-6 mt-3">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-md-6 mt-3">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" placeholder='Type ur City'/>
  </div>
  <div className="col-md-6 mt-5">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>U.P.</option><option>M.P.</option><option>H.P.</option><option>Bihar</option><option>Rajasthan</option><option>Kerala</option>
    </select>
  </div>
  <div className="col-md-4 mt-5">
    <label for="inputZip" className="form-label">Zip Code</label>
    <input type="text" className="form-control" id="inputZip" placeholder='000000'/>
  </div>
  <div className="col-12 mt-3">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12 mt-3">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}
