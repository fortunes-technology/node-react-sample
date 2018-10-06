
// Import all the third party stuff
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute } from 'react-router';
// import history from './utils/history';

import configureStore, { history } from './store';

// Import the components used as pages

import NotFound from './components/pages/NotFound.react';
import App from './components/App.react';
import AdminDashboard from './pages/admin';
import AdminRoute from './routes/AdminRoute';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import registerServiceWorker from './registerServiceWorker';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
// Import the CSS file, which webpack transfers to the build folder
import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.css';
import 'font-awesome/css/font-awesome.css';


const store = configureStore();

// Mostly boilerplate, except for the Routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <AdminRoute path="/admin" component={AdminDashboard} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
