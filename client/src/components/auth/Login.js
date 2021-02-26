import React, { Fragment, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData; //destructure to pull out name, so name is basically formData.name, etc.

  const handleDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //for some reason we're copying the formData using spread operater? then name is the name value in the input
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Success!')
    }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign In to Your Account</p>
      <form className="form" onSubmit={onSubmit} >
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={ email } onChange={handleDataChange} required/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" name="password" minLength="6" value={ password } onChange={handleDataChange} required/>
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account?? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  )
}

export default Login