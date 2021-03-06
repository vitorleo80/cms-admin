import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LoginForm } from './LoginForm'

export class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  }

  render() {
    return (
      <LoginForm
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        errors={this.state.errors}
      />
    );
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await this.props.loginUser(this.state);
      this.props.setAuthUser(user)
    } catch (errors) {
      this.setState({ errors });
    }
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  setAuthUser: PropTypes.func.isRequired,
}
