/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { CreateArticleForm } from './CreateArticleForm'

export class CreateArticle extends Component {
  state = {
    title: '',
    image: null,
    content: '',
    category: null,
    errors: {},
    categories: [],
  }

  async componentDidMount() {
    const categories = await this.props.getArticleCategories()
    this.setState({ categories })
  }

  render() {
    return (
      <CreateArticleForm
        handleInputChange={this.handleInputChange}
        categories={this.state.categories}
      />
    )
  }

  handleInputChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.type === 'file' ? evt.target.files[0] : evt.target.value,
    })
  }
}
