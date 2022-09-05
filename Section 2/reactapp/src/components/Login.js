import React from 'react';
import {Formik} from 'formik';
import './login.css';
import { Link } from 'react-router-dom';
const Login = () => {

  const loginsubmit = (formdata) => {
    console.log(formdata);
  }

  // Instructions to store data in database

  return (
    <div>

      <h1 style={{ color: "red", textAlign: 'center' }}>Login Page</h1>
      <div className='mydiv2'>
        <div className="mycard">
          {/* <h1>Login</h1> */}
          {/* <h5>Contact the help team</h5> */}
          {/* <label>What can we help you with?</label>
        <input className="myinput" list="dept"/>
        <datalist id="dept">
            <option >Unable to Login.</option>
            <option>Facing error while uploading photos</option>
            <option>Sharing a story with your close friend List</option>
            <option>Creating a poll in instagram direct</option>
            <option >Blocking people</option>
            <option >Sign up for an account</option>
        </datalist> */}
          {/* <!-- <label>Get in Touch</label> */}
          {/* <br/>
        <br/> */}
          <h6>Start for Free</h6>
          <h1 style={{ color: 'black' }}>Create new account</h1>
          Already a member?<Link to="/login_page">Login</Link>
          <br />
          <Formik initialValues={{email:"",password:""}} onSubmit={loginsubmit}>
            {({values,handleSubmit,handleChange})=>(<form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input className="myinput" placeholder="Full Name" />
            <br /><br />
            <label>Enter Email address</label>
            <input className="myinput" id="email" value={values.email} onChange={handleChange} placeholder="xyz@gmail.com" />
            <br /><br />
            <label>Password</label>
            <input id="password" value={values.password} onChange={handleChange} className="myinput" />
            <br />
            <br />
            <label>Confirm Password</label>
            <input type='Password' className="myinput" />
            <br />
            <div className='mydiv'>
              <button className="mybtn" >Create account</button>
              {/* <button className="mybtn" style={{marginLeft:'30px'}}>Change method</button> */}
            </div>
          </form>)}
          </Formik>
          
        </div>
      </div>
    </div>
  )
}

export default Login;