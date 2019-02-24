/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import {
  NavBar, Welcome, Footer, CreateArticle, Login, SingleArticle, SignUp,
} from './index'

// eslint-disable-next-line import/prefer-default-export
export class App extends Component {
    state = {
      authUser: null,
    }

    componentDidMount() {
      const user = localStorage.getItem('user')
      if (user) {
        this.setState({
          authUser: JSON.parse(user),
        })
      }
    }

    setAuthUser = (authUser) => {
      this.setState({
        authUser,
      }, () => {
        // save user's session
        localStorage.setItem('user', JSON.stringify(authUser))
        // redirect user
        this.props.history.push('/');
      })
    }

    render() {
      const { location } = this.props
      return (
        <div>
          {location.pathname !== '/login' && location.pathname !== '/signup'
                    && <NavBar authUser={this.state.authUser} />
                }
          <Route exact path="/" component={Welcome} />
          <Route path="/login" render={props => <Login {...props} setAuthUser={this.setAuthUser} loginUser={this.props.authService.loginUser} />} />
          <Route path="/signup" render={props => <SignUp {...props} registerUser={this.props.authService.registerUser} setAuthUser={this.setAuthUser} />} />
          <Route path="/article/:slug" component={SingleArticle} />
          <Route exact path="/articles/create" render={props => <CreateArticle {...props} getArticleCategories={this.props.articlesService.getArticleCategories} />} />
          {location.pathname !== '/login' && location.pathname !== '/signup'
                    && <Footer />
                }
        </div>
      )
    }
}


App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  authService: PropTypes.objectOf(PropTypes.func).isRequired,
}
