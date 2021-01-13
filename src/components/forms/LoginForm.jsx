import React, { Component } from 'react';
import '../../style/loginForm.css'
import validator from 'validator';
import InLineError from '../messages/inLineError';
class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }
  onChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }
  handelSubmit = (e) => {
    const errors = this.validate(this.state.data);
    if(!errors.email ||!errors.password)
    { 
      this.setState({loading:true})
    }
    this.setState({ errors })
    e.preventDefault()
  }

  validate = (data) => {
    const errors = {};
    if (!validator.isEmail(data.email))
    {
      errors.email = "Invalid mail"
    }
    if (!data.password)
    {          // if pass is not enterd
      errors.password = "can't be Empty"
    }
    return errors
  }
  render() {
    return (
      <form onSubmit={this.handelSubmit} >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className={this.emailClass()}
            id="email"
            name="email"
            placeholder="example@example.com"
            value={this.state.data.email}
            onChange={this.onChange}
          />

          {this.state.errors.email && <InLineError text={this.state.errors.email} />}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">password</label>
          <input
            type="password"
            className={this.passClass()}
            id="password"
            name="password"
            placeholder="make it secure"
            value={this.state.data.password}
            onChange={this.onChange}
          />
          {this.state.errors.password && <InLineError text={this.state.errors.password} />}

        </div>

        <button className="btn btn-primary">Log in</button>
      </form>
    );
  }


  emailClass() {
     
    if (this.state.errors.email )
    {
      return  "form-control notValid"
    }
    
    if(this.state.loading)
    { 
     return "form-control Valid"
    }
    return "form-control"
  }
  passClass() {
    if (this.state.errors.password)
    {
      return "form-control notValid"
    }
    if (this.state.loading)
    {
      return "form-control Valid"
    }
    return "form-control"
  }
  
}
export default LoginForm;
