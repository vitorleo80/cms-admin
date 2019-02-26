import React from 'react';
import PropTypes from 'prop-types';
import { Banner } from './Banner';
import { Article } from './Article';

export const UserArticle = ({
  articles, handlePagination, nextUrl, prevUrl, deleteArticle, editArticle,
}) => ((
  <div>

    <Banner
      backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-gift.jpg)`}
      title="My Articles"
      subTitle="Here are the articles created by you."
    />

    <main className="main-content bg-gray">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3">
          {articles && articles.map(article => (
            <div key={article.id}>
              <Article article={article} />
              <div className="text-center">
                <button onClick={() => editArticle(article)} className="btn btn-info mr-5">Edit Article</button>
                <button onClick={() => deleteArticle(article.id)} className="btn btn-danger">Delete Article</button>
              </div>
              <hr />
            </div>
          ))}
          <nav className="flexbox mt-50 mb-50">
            <a className={`btn btn-white ${prevUrl ? '' : 'disabled'}`} href="#" onClick={() => handlePagination(prevUrl)}>
              <i className="ti-arrow-left fs-9 ml-4" />
              {' '}
Previous Page
            </a>
            <a className={`btn btn-white ${nextUrl ? '' : 'disabled'}`} href="#" onClick={() => handlePagination(nextUrl)}>
              Next Page
              {' '}
              <i className="ti-arrow-right fs-9 mr-4" />
            </a>
          </nav>
        </div>
      </div>
    </main>
  </div>
));

UserArticle.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
  handlePagination: PropTypes.func.isRequired,
  nextUrl: PropTypes.string,
  prevUrl: PropTypes.string,
  deleteArticle: PropTypes.func.isRequired,
  editArticle: PropTypes.func.isRequired,
}

UserArticle.defaultProps = {
  articles: [],
  nextUrl: null,
  prevUrl: null,
}
