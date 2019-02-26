import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import {
  NavBar, Welcome, Footer, CreateArticle, Login, SingleArticleWrap, SignUp, Auth, RedirectIfAuth, UserArticles,
} from './index'

export class App extends Component {
    state = {
      authUser: null,
      articles: [],
    }

  componentWillMount() {
    const user = localStorage.getItem('user');

    if (user) {
      this.setState({
        authUser: JSON.parse(user),
      });
    }
  }

  setArticles = (articles) => {
    this.setState({ articles });
  }

  setAuthUser = (authUser) => {
    this.setState({
      authUser,
    }, () => {
      localStorage.setItem('user', JSON.stringify(authUser));
      this.props.notyService.success('Successfully logged in!');
      this.props.history.push('/');
    });
  }

  removeAuthUser = () => {
    localStorage.removeItem('user');
    this.props.notyService.success('Successfully logged out!');
    this.setState({ authUser: null });
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        {
          location.pathname !== '/login' && location.pathname !== '/signup' &&
          <NavBar authUser={this.state.authUser} removeAuthUser={this.removeAuthUser} />
        }
        <Route
          exact
          path="/"
          render={
            props => (
              <Welcome
                {...props}
                getArticles={this.props.articlesService.getArticles}
                setArticles={this.setArticles}
              />
            )
          }
        />
        <RedirectIfAuth
          path="/login"
          component={Login}
          props={{
            setAuthUser: this.setAuthUser,
            loginUser: this.props.authService.loginUser,
          }}
          isAuthenticated={this.state.authUser !== null}
        />
        <RedirectIfAuth
          path="/signup"
          component={SignUp}
          props={{
            setAuthUser: this.setAuthUser,
            registerUser: this.props.authService.registerUser,
          }}
          isAuthenticated={this.state.authUser !== null}
        />
        <Route
          path="/user/article/:slug"
          exact
          render={
            props => (
              <SingleArticleWrap
                {...props}
                getArticle={this.props.articlesService.getArticle}
                articles={this.state.articles}
              />
            )
          }
        />
        <Auth
          path="/articles/create"
          component={CreateArticle}
          props={{
            getArticleCategories: this.props.articlesService.getArticleCategories,
            createArticle: this.props.articlesService.createArticle,
            token: this.state.authUser ? this.state.authUser.token : null,
            notyService: this.props.notyService,
          }}
          isAuthenticated={this.state.authUser !== null}
        />
        <Auth
          path="/user/articles"
          component={UserArticles}
          props={{
            getUserArticles: this.props.articlesService.getUserArticles,
            setArticles: this.setArticles,
            deleteArticle: this.props.articlesService.deleteArticle,
            token: this.state.authUser ? this.state.authUser.token : null,
          }}
          isAuthenticated={this.state.authUser !== null}
        />
        <Auth
          path="/article/edit/:slug"
          component={CreateArticle}
          props={{
            getArticleCategories: this.props.articlesService.getArticleCategories,
            createArticle: this.props.articlesService.createArticle,
            token: this.state.authUser ? this.state.authUser.token : null,
            articles: this.state.articles,
            updateArticle: this.props.articlesService.updateArticle,
            notyService: this.props.notyService,
          }}
          isAuthenticated={this.state.authUser !== null}
        />
        {
          location.pathname !== '/login' && location.pathname !== '/signup' &&
          <Footer />
        }
      </div>
    );
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
  articlesService: PropTypes.objectOf(PropTypes.func).isRequired,
  notyService: PropTypes.objectOf(PropTypes.func).isRequired,
};
