import React from 'react'

export const Banner = ({backgroundImage, subTitle, title}) => (
    <header className="header header-inverse" style={{ backgroundImage}} data-overlay={8}>
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          {/* <img className="logo-inverse" src="assets/img/logo-light.png" alt="logo" /> */}
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  </header>
)