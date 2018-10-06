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
import FooterComponent from './../../components/home/footer';
import HeaderComponent from './../../components/home/header';
import './index.css';

class HomePage extends Component {
	render() {

    return (
			<div>
			<HeaderComponent></HeaderComponent>

			  <section>
			    <div className="container">
			      <article className="article1">
			        <div className="row is-flex">
			          <div className="col-12 col-lg-4">
			            <div className="card card-1">
			              <div className="card-img-top" src="resource/img/25.png" alt="Card image cap"></div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h4 className="card-title">OCTAGON CODEBASE</h4>
			                <p className="card-text d-none d-md-block">
			                  Deep in the highest security labs of the Octagon system headquaters, scientists from the Vans unit have been busy with a
			                  new confidential program known as "Codebase".
			                </p>
			              </div>
			              <div className="read">
			                <a className="text-info d-none d-md-block">READ MORE</a>
			              </div>
			              <h6 className="d-md-none featured">Featured By Culture</h6>
			            </div>
			          </div>
			          <div className="col-6 col-lg-4">
			            <div className="card card-2">
			              <div className="card-img-top" id="card-image-2"></div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 3:15 PM</h6>
			                <h4 className="card-title">HONOR UP: WATCHING DAME DASH'S NEW FILM</h4>
			                <p className="card-text d-none d-md-block">
			                  1/4th of Slaughterhourse KXNG Crooked is featured on the new LP Jazz[Deluxe] with his frequent producers Smith and Hay.
			                </p>
			              </div>
			              <div className="read">
			                <a href="article1.html" className="text-warning d-none d-md-block">READ MORE</a>
			              </div>
			              <h6 className="d-md-none featured">HYPEBEAST</h6>
			            </div>
			          </div>
			          <div className="col-6 col-lg-4">
			            <div className="card card-2">
			              <div className="card-img-top" id="card-image-3"></div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 10:53 AM</h6>
			                <h4 className="card-title">THE WEEKEND AND KENDRICK LAMAR</h4>
			                <p className="card-text d-none d-md-block">
			                  The Weeknd and Kendrick lamar Drop "Pray for Me" Off Black Panther: The Album
			                </p>
			              </div>
			              <div className="read">
			                <a href="article2.html" className="text-success d-none d-md-block">READ MORE</a>
			              </div>
			              <h6 className="d-md-none featured">Featured By Culture</h6>
			            </div>
			          </div>
			        </div>
			      </article>

			      <article className="article2">
			        <header className="d-none d-md-block">
			          <h1>JANUARY 27 2018</h1>
			        </header>
			        <div className="row is-flex">
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-5">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">G.O.O.D. MUSIC</h5>
			                <p className="card-text d-none d-lg-block">
			                  G.O.O.D Music Producer Warns to 'Keep an Eye Out' for 'Little Treat'
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-6">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">A - GOLD - WALL</h5>
			                <p className="card-text d-none d-lg-block">
			                  A Talk With Samuel Ross From A-COLD-WALL on the Feature of Streetware and High Fashion Goods
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-7">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">SNOW BEACH POLO</h5>
			                <p className="card-text d-none d-lg-block">
			                  Does the Re-Release of the Snow Beach Mean Polo is finally Giving Hip-Hop Its Props?
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-8">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">SPEEDY MORMAN</h5>
			                <p className="card-text d-none d-lg-block">
			                  Speedy Morman takes viewers on an in-depth look into some of the most aspirational and unexpectedly cool professions.
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-9">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">THE NEW WAVE OF INDIE ARCADE CABINETS</h5>
			                <p className="card-text d-none d-lg-block">
			                  G.O.O.D Music Producer Warns to 'Keep an Eye Out' for 'Little Treat'
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-10">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">27 INSANELY TALENTED TATTOO ARTISTS</h5>
			                <p className="card-text d-none d-lg-block">
			                  A Talk With Samuel Ross From A-COLD-WALL on the Feature of Streetware and High Fashion Goods
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-11">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">THE SECRET LIFE OF STREET ARTISTS</h5>
			                <p className="card-text d-none d-lg-block">
			                  Does the Re-Release of the Snow Beach Mean Polo is finally Giving Hip-Hop Its Props?
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-12">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">HAMO - COTTON CLUB</h5>
			                <p className="card-text d-none d-lg-block">
			                  Speedy Morman takes viewers on an in-depth look into some of the most aspirational and unexpectedly cool professions.
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			        </div>
			      </article>

			      <article className="article3">
			        <header className="d-none d-md-block">
			          <h1>JANUARY 27 2018</h1>
			        </header>
			        <div className="row is-flex">
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-13">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">G.O.O.D. MUSIC</h5>
			                <p className="card-text d-none d-lg-block">
			                  G.O.O.D Music Producer Warns to 'Keep an Eye Out' for 'Little Treat'
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-14">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">A - GOLD - WALL</h5>
			                <p className="card-text d-none d-lg-block">
			                  A Talk With Samuel Ross From A-COLD-WALL on the Feature of Streetware and High Fashion Goods
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-15">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">SNOW BEACH POLO</h5>
			                <p className="card-text d-none d-lg-block">
			                  Does the Re-Release of the Snow Beach Mean Polo is finally Giving Hip-Hop Its Props?
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-16">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">SPEEDY MORMAN</h5>
			                <p className="card-text d-none d-lg-block">
			                  Speedy Morman takes viewers on an in-depth look into some of the most aspirational and unexpectedly cool professions.
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-17">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">THE NEW WAVE OF INDIE ARCADE CABINETS</h5>
			                <p className="card-text d-none d-lg-block">
			                  G.O.O.D Music Producer Warns to 'Keep an Eye Out' for 'Little Treat'
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-18">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">27 INSANELY TALENTED TATTOO ARTISTS</h5>
			                <p className="card-text d-none d-lg-block">
			                  A Talk With Samuel Ross From A-COLD-WALL on the Feature of Streetware and High Fashion Goods
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-19">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">THE SECRET LIFE OF STREET ARTISTS</h5>
			                <p className="card-text d-none d-lg-block">
			                  Does the Re-Release of the Snow Beach Mean Polo is finally Giving Hip-Hop Its Props?
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-3">
			            <div className="card card-3">
			              <div className="card-img-top" id="card-image-20">
			              </div>
			              <div className="card-body">
			                <h6 className="card-subtitle mb-2 text-muted">JANUARY 22 | 8:00 PM</h6>
			                <h5 className="card-title">HAMO - COTTON CLUB</h5>
			                <p className="card-text d-none d-lg-block">
			                  Speedy Morman takes viewers on an in-depth look into some of the most aspirational and unexpectedly cool professions.
			                </p>
			                <h6 className="d-lg-none featured">Featured By Culture</h6>
			              </div>
			              <div className="read d-none d-lg-block">
			                <a className="text-info">READ MORE</a>
			              </div>
			            </div>
			          </div>
			        </div>
			      </article>

			      <div className="more-articles">
			        <button>MORE ARTICLES</button>
			      </div>

			    </div>
			  </section>

			  <FooterComponent/>

			</div>
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
export default connect(select)(HomePage);
