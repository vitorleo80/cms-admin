/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SignUpForm } from './SignUpForm'

export class SignUp extends Component {
    state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},

    }


    render() {
      return (
        <SignUpForm
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />
      )
    }

    handleInputChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value,
      })
    }

    handleSubmit = async (evt) => {
      evt.preventDefault()
      // validating user data
      try {
        const user = await this.props.registerUser(this.state)
        // login user
        this.props.setAuthUser(user.name)
      } catch (errors) {
        this.setState({ errors })
      }
    }
}
SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  setAuthUser: PropTypes.func.isRequired,
}
