import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


// eslint-disable-next-line import/prefer-default-export
export const Article = () => (
  <article className="my-90">
    <header className="text-center mb-40">
      <h3>
        <a href="blog-single.html">Download our Chrome extension</a>
      </h3>
      <div className="link-color-default fs-12">
        <a href="#">Updates</a>
,
        <time>May 13, 2017</time>
      </div>
    </header>
    <a href="blog-single.html">
      <img className="rounded" src="assets/img/blog-2.jpg" alt="..." />
    </a>
    <div className="card-block">
      <p className="text-justify">
Together. Great. So good was saying, that can't first let called air divide stars male isn't i. Herb third let
              may fourth divide. Greater gathering land you'll i their beast have. She'd form sea it wherein fowl, spirit
              creeping living. Likeness creepeth you hath heaven. Likeness, moveth fruitful behold. Open evening a air us
      behold. Saying above moving second a subdue likeness after also second.

      </p>
      <p className="text-center mt-40">
        <Link className="btn btn-primary btn-round" to="/article/some-title-slug">Read more</Link>
      </p>
    </div>
  </article>

)

