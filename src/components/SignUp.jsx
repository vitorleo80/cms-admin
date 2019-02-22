/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react'
import { validateAll } from 'indicative'
import Axios from 'axios'
import config from '../config'
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
        // save user's session
        localStorage.setItem('user', JSON.stringify(user))
        // login user
        this.props.setAuthUser(user.name)
        // redirect user
        this.props.history.push('/')
      } catch (errors) {
        this.setState({ errors })
      }
    }
}
