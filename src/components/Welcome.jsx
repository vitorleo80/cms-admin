import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Articles } from './Articles'

export class Welcome extends Component {
  state = {
    articles: {},
  }

  async componentWillMount() {
    const articles = await this.props.getArticles()
    this.setState({ articles })
    this.props.setArticles(articles.data)
  }

  render() {
    return (
      <Articles
        articles={this.state.articles.data}
        nextUrl={this.state.articles.next_page_url}
        prevUrl={this.state.articles.prev_page_url}
        handlePagination={this.handlePagination}
      />
    )
  }

  handlePagination = async (url) => {
    const articles = await this.props.getArticles(url)
    this.setState({ articles })
    this.props.setArticles(articles.data)
  }
}

Welcome.propTypes = {
  getArticles: PropTypes.func.isRequired,
  setArticles: PropTypes.func.isRequired,
}
