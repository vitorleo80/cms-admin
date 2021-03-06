import React from 'react'
import PropTypes from 'prop-types'

export const LoginForm = ({ handleInputChange, handleSubmit, errors }) => (
  <div className="mh-fullscreen bg-img center-vh p-20" style={{ backgroundImage: 'url(assets/img/bg-login.jpg)' }}>
    <div className="card card-shadowed p-50 w-400 mb-0" style={{ maxWidth: '100%' }}>
      <img className="logo-default text-center" src={`${process.env.PUBLIC_URL}/assets/img/logo-colour.png`} alt="logo" />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="email" onChange={handleInputChange} className="form-control" placeholder="Username" />
          {
            errors.email
            && <small className="text-danger">{errors.email}</small>
          }
        </div>
        <div className="form-group">
          <input type="password" name="password" onChange={handleInputChange} className="form-control" placeholder="Password" />
          {
            errors.password
            && <small className="text-danger">{errors.password}</small>
          }
        </div>
        <div className="form-group flexbox py-10">
          <label className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" defaultChecked />
            <span className="custom-control-indicator" />
            <span className="custom-control-description">Remember me</span>
          </label>
          <a className="text-muted hover-primary fs-13" href="#">Forgot password?</a>
        </div>
        <div className="form-group">
          <button className="btn btn-bold btn-block btn-secondary" type="submit">Login</button>
        </div>
      </form>
      <hr className="w-30" />
    </div>
  </div>
)

LoginForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
};
