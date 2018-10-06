/**
 *
 * Nav.react.js
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from './../../actions/authActions';

class AdminNav extends Component {
  render() {
    const { logout, match } = this.props;
    return(
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-sm  fixed-top navbar-light bg-white">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">FortunesTech</a>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={`${match.url}/categories`} className="nav-link">Categories</Link>
                </li>
                <li className="nav-item">
                  <Link to={`${match.url}/articles`} className="nav-link">Articles</Link>
                </li>
              </ul>
              <form className="form-inline mt-2 mt-md-0">
                <a href="#" className="nav-link" onClick={logout}>Logout</a>
              </form>
            </div>
          </nav>
        </div>
      </header>
    );
  }

}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminNav);