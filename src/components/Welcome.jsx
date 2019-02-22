import React from 'react'
import {Article} from './Article'
import {Banner} from './Banner'


export const Welcome = () => (
  <div>
    <Banner backgroundImage='url(assets/img/bg-gift.jpg)' title='CMS ADMIN' />
    <main className="main-content bg-gray">
      <div class="row">
        <div class="col-12 col-lg-6 offset-lg-3">
          <Article />
          <hr />
          <Article />
          <nav className="flexbox mt-50 mb-50">
            <a className="btn btn-white disabled">
              <i className="ti-arrow-left fs-9 mr-4" /> Newer</a>
            <a className="btn btn-white" href="#">Older
    <i className="ti-arrow-right fs-9 ml-4" />
            </a>
          </nav>
        </div>
      </div>
    </main>
  </div>
)