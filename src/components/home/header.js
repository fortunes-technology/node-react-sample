/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.css';
import Logo from '../../assets/img/logo.png';

class HeaderComponent extends Component {
	render() {
    return (
    <header>
      <div className="container">
        <nav id="navbar-primary" className="navbar navbar-expand-sm navbar-light bg-white">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-toggler" href="#">
            <img id="phone-logo" className="bg-white" src={Logo} width="150" alt="logo"/>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mt-2 mt-sm-0">
              <li className="nav-item active">
                <a className="nav-link category" href="#">CATEGORIES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">EVENTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">NEWS</a>
              </li>
              <li className="nav-item">
                <a href="index.html">
                  <img id="logo-navbar-middle" className="bg-white d-none d-md-block" src={Logo} width="180" alt="logo"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">VIDEOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">CONTACTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-none d-md-block" href="#">SEARCH</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="active-category categories">
        <div id="first-column">
          <ul>
            <li>
              <a>CULTURE</a>
            </li>
            <li>
              <a>MEWS</a>
            </li>
            <li>
              <a>FASHON</a>
            </li>
            <li>
              <a>SPORTS</a>
            </li>
          </ul>
          <h3 className="d-sm-none back-btn" style={{marginTop: 100}}>
            <i className="fa fa-arrow-left"></i> BACK
          </h3>
        </div>
        <div id="second-column">
          <ul>
            <li>
              <a>MUSIC</a>
            </li>
            <li>
              <a>DESIGN</a>
            </li>
            <li>
              <a>ARTS</a>
            </li>
            <li>
              <a>FOOD</a>
            </li>
          </ul>
        </div>
        <div id="third-column">
          <h2>Sort by Date</h2>
          <div className="dropdown">
            <button className="btn btn-filter dropdown-toggle" type="button" data-toggle="dropdown">This Month
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#">#</a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="#">#</a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="#">#</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HeaderComponent);
