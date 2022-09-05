import React from 'react';
import './login1.css';
function Login1() {
  return (
    <div>
      <div className="container ">
        <h1 style={{ textAlign: 'center' }}>Sign in</h1>
        <div className="row mylogin">
          <div className="col-md-6 mylinear">
            <h6>Start for Free</h6>
            <h1 style={{ color: 'black' ,paddingTop:'20px'}}>Welcome Page</h1>
            <label className='myfont'>Name</label>
            <br />

          </div>
          <div className="col-md-6">
            <h6>Sign in again</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login1