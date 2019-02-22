/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
      localStorage.setItem('user', JSON.stringify(user))
      this.props.setAuthUser(user)
      this.props.history.push('/');
    } catch (errors) {
      this.setState({ errors });
    }
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  setAuthUser: PropTypes.func.isRequired,
}
