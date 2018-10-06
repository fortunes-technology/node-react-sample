/*
 * HomePage
 *
 * The Dashboard is only visible to logged in users
 * Route: /dashboard
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './index.css';
import AdminNav from './../../components/admin/AdminNav';
import AdminArticles from './articles';
import AdminCategorys from './categorys';
import { Switch, Route, Redirect } from 'react-router-dom';

class AdminDashboard extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <AdminNav match={match}></AdminNav>
        <Switch>
          <Route exact path={`${match.path}`} render={() => (
                <Redirect to={`${match.path}/articles`}/> 
              )} />
          <Route path={`${match.path}/articles`} component={AdminArticles} />
          <Route path={`${match.path}/categories`} component={AdminCategorys} />
        </Switch>
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
export default connect(select)(AdminDashboard);
