/*
 * HomePage
 *
 * The Dashboard is only visible to logged in users
 * Route: /dashboard
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import styles from './index.css';
import AdminCategoryList from './list';
import AdminCategoryDetail from './detail';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

class AdminCategorys extends Component {
  render() {
    const { match } = this.props;
    return (
      <Div>
        <h1>Manage Categories</h1>
        <Switch>
          <Route exact path={`${match.path}`} component={AdminCategoryList} />
          <Route path={`${match.path}/new`} component={AdminCategoryDetail} />
          <Route path={`${match.path}/:slug`} component={AdminCategoryDetail} />
        </Switch>
      </Div>
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
export default connect(select)(AdminCategorys);

const Div = styled.div`
  padding: 50px 20px 20px 20px;
`;