

/*
import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Login from './components/login';
import Register from './components/register';
import VerifyAccount from './components/verify_account';
import BookingForm from './components/booking_form';
import History from './components/history';
import ATHReview from './components/ath_review';
import HTAReview from './components/hta_review';
import HTHReview from './components/hth_review';
import ATAReview from './components/ata_review';
import PaymentMethod from './components/payment_method';
import ATHFinalReview from './components/ath_final_review';
import HTAFinalReview from './components/hta_final_review';
import HTHFinalReview from './components/hth_final_review';
import ATAFinalReview from './components/ata_final_review'


class Routes extends Component {

  const requireLogin = (nextState, replace, cb) => {
    const { user } = store.getState().auth.main;
    if (!user) {
      // oops, not logged in, so can't be here!
      replace({
        pathname: '/login'
      });
    }
    cb();
  };

  const requireAdmin = (nextState, replace, cb) => {
    const { user } = store.getState().auth.main;
    if (!user || !user.isAdmin) {
      replace({ pathname: '/siteError', query: { status: 404 } });
    }
    cb();
  };

  const requireAnonymous = (nextState, replace, cb) => {
    const { user } = store.getState().auth.main;
    if (user) {
      // oops, logged in, so can't be here!
      const isSignUp = nextState.location.pathname.includes('/signup');
      replace('/');
    }
    cb();
  };

  render() {
    return (
      <Route path="/" component={App}>
        <IndexRoute onEnter={handleHome} getComponent={lazyLoadComponent(NewHome)} />

        <Route path="categories/" getComponent={lazyLoadComponent(Chat)}/>
        <Route onEnter={requireAdmin}>
          <Route path="admin">
            <IndexRoute getComponent={lazyLoadComponent(AdminOld)} />
            <Route path="categorys" getComponent={lazyLoadComponent(AdminOld)} />
            <Route path="articles" getComponent={lazyLoadComponent(EditPlan)}/>
          </Route>
        </Route>
        <Route onEnter={requireAnonymous}>
          <Route path="login" getComponent={lazyLoadComponent(Login)}>
        </Route>
        <Route path="logout" onEnter={handleLogout} />
        <Route path="*" onEnter={handleSiteError} getComponent={lazyLoadComponent(SiteError)} status={404}/>
      </Route>
    )
  }
}

export default Routes;
*/
