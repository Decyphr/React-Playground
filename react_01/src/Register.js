import React, { Component } from 'react';
import logo from './logo.svg';

import './bootstrap.min.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirm: "",
      registered: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const change = { [event.target.name]: event.target.value };

    this.setState(change);
  }

  handleSubmit(event) {
    this.setState ({
      username: this.state.username,
      password: this.state.password,
      registered: true
    });

    event.preventDefault();
  }

  render() {
    if (!this.state.registered) {
      return(
        <div class="container">
          <h1>Sign Up</h1>
          <form>
            <input onChange={this.handleChange} name="username" placeholder="Username" type="text" value={this.state.username} />
            <input onchange={this.handleChange} name="password" placeholder="Password" type="text" value={this.state.password} />
            <input onchange={this.handleChange} name="confirm" placeholder="Confirm Password" type="text" value={this.state.confirm} />
            <input onSubmit={this.handleSubmit} type="submit" value="Register"/>
          </form>
        </div>
      );
    }

    else {
      return(
        <div>
          Thanks For Registering!
        </div>
      );
    }
  }
}

export default Register;
