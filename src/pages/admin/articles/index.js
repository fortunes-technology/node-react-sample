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
import AdminArticleList from './list';
import AdminArticleDetail from './detail';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

class AdminArticles extends Component {
  render() {
    const { match } = this.props;
    return (
      <Div>
        <h1>Manage Articles</h1>
        <Switch>
          <Route exact path={`${match.path}`} component={AdminArticleList} />
          <Route path={`${match.path}/new`} component={AdminArticleDetail} />
          <Route path={`${match.path}/:slug`} component={AdminArticleDetail} />
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
export default connect(select)(AdminArticles);

const Div = styled.div`
  padding: 50px 20px 20px 20px;
`;