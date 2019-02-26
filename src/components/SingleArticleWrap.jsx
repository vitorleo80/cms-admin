import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SingleArticle } from './SingleArticle';

export class SingleArticleWrap extends Component {
state = {
      article: null,
      loading: true,
    };


  async componentWillMount() {
    let article = this.props.articles.find(articleInArray => articleInArray.slug === this.props.match.params.slug);

    if (article) {
      this.setState({ article, loading: false });
    } else {
      article = await this.props.getArticle(this.props.match.params.slug);
      this.setState({ article, loading: false });
    }
  }

  render() {
    return (
      <div>
        {
          !this.state.loading
          && (
          <SingleArticle
            article={this.state.article}
          />
          )
        }
        {
          this.state.loading
          && <p className="text-center">LOADING ...</p>
        }
      </div>
    );
  }
}

SingleArticleWrap.propTypes = {
  getArticle: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
  })).isRequired,
};
