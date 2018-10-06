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
import './footer.css';
import Image18 from '../../assets/img/18.png';
import Image15 from '../../assets/img/15.png';

class FooterComponent extends Component {
	render() {

    return (
		  <footer>
		    <div className="container">
		      <div className="d-none d-lg-block">
		        <div className="row">
		          <div className="col-lg-4">
		            <div className="row">
		              <div className="col-md-7">
		                <div id="logo-img">
		                  <img src={Image18}/>
		                </div>
		              </div>
		              <div className="col-md-5">
		                <ul className="links">
		                  <li>TRENDING</li>
		                  <li>NEWS</li>
		                  <li>VIDEOS</li>
		                  <li>STORE</li>
		                </ul>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-5">
		            <div id="subscribe">
		              <h4>SUBSCRIBE</h4>
		              <input type="text" placeholder="SIGN UP WITH EMAIL"/>
		            </div>
		          </div>
		          <div className="col-lg-3">
		            <div id="our-info">
		              <h6>CONNECT WITH US</h6>
		              <div className="social">
		                <a>
		                  <i className="fa fa-twitter" aria-hidden="true"></i>
		                </a>
		                <a>
		                  <i className="fa fa-instagram" aria-hidden="true"></i>
		                </a>
		                <a>
		                  <i className="fa fa-snapchat-ghost" aria-hidden="true"></i>
		                </a>
		                <a>
		                  <i className="fa fa-facebook" aria-hidden="true"></i>
		                </a>
		              </div>
		              <h6>
		                <a>TERMS OF USE</a>
		              </h6>
		              <h6>
		                <a>PRIVACY POLICY</a>
		              </h6>
		              <h6>
		                <a>SITE MAP</a>
		              </h6>
		            </div>
		          </div>
		        </div>
		        <div className="copyright">
		          <p>2018 Fortunes Technology | All Right Reserved</p>
		        </div>
		      </div>

		      <div className="d-lg-none">
		        <div id="social-info">
		          <div id="social-icons">
		            <a>
		              <i className="fa fa-twitter" aria-hidden="true"></i>
		            </a>
		            <a>
		              <i className="fa fa-instagram" aria-hidden="true"></i>
		            </a>
		            <a>
		              <i className="fa fa-snapchat-ghost" aria-hidden="true"></i>
		            </a>
		            <a>
		              <i className="fa fa-facebook" aria-hidden="true"></i>
		            </a>
		          </div>
		          <div id="move-img">
		            <img src={Image15}/>
		          </div>
		        </div>
		        <div id="lg-down-links">
		          <div id="left-links">
		            <a className="clearfix">TRENDING</a>
		            <a className="clearfix">NEWS</a>
		          </div>
		          <div id="right-links">
		            <a className="clearfix">CATEGORIES</a>
		            <a className="clearfix">VIDEOS</a>
		          </div>
		        </div>
		        <div id="other-info">
		          <h6>
		            <a className="clearfix">TERMS OF USE</a>
		          </h6>
		          <h6>
		            <a className="clearfix">PRIVACY POLICY</a>
		          </h6>
		          <h6>
		            <a className="clearfix">SITE MAP</a>
		          </h6>
		        </div>
		        <div id="lg-down-copyright">
		          <p>2018 Fortunes Technology | All Right Reserved</p>
		        </div>
		      </div>
		    </div>
		  </footer>
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
export default connect(select)(FooterComponent);
