import React, { Fragment, useState } from 'react'

const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData; //destructure to pull out name, so name is basically formData.name, etc.

  const handleDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //for some reason we're copying the formData using spread operater? then name is the name value in the input
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords must match.');
    } else {
      console.log(formData);
    }
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={onSubmit} >
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={ name } onChange={handleDataChange} required />
          {/* value above is pulling from state, so once state is set/change is handled, value is updated */}
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={ email } onChange={handleDataChange} required/>
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" name="password" minLength="6" value={ password } onChange={handleDataChange} required/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password" name="password2" minLength="6" value={ password2 } onChange={handleDataChange} required/>
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </Fragment>
  )
}

export default Register
