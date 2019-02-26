/* eslint-disable import/prefer-default-export */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UserArticle } from './UserArticle';


export class UserArticles extends Component {
  state = {
    articles: {},
  }


  async componentWillMount() {
    const articles = await this.props.getUserArticles(this.props.token);

    this.setState({ articles });
    this.props.setArticles(articles.data);
  }

  handlePagination = async (url) => {
    const articles = await this.props.getUserArticles(this.props.token, url);

    this.setState({ articles });
    this.props.setArticles(articles.data);
  }

  editArticle = (article) => {
    this.props.history.push(`/article/edit/${article.slug}`);
  }

  deleteArticle = async (id) => {
    await this.props.deleteArticle(id, this.props.token);

    // remove article from list.
    const articles = this.state.articles.data.filter(article => article.id !== id);
    this.setState({
      articles: {
        data: articles,
      },
    })
  }

  render() {
    return (
      <UserArticle
        articles={this.state.articles.data}
        nextUrl={this.state.articles.next_page_url}
        prevUrl={this.state.articles.prev_page_url}
        handlePagination={this.handlePagination}
        deleteArticle={this.deleteArticle}
        editArticle={this.editArticle}
      />
    );
  }
}

UserArticles.propTypes = {
  getUserArticles: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  setArticles: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}
