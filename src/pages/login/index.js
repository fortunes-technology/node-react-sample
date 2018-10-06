/*
 * LoginPage
 *
 * Users login on this page
 * Route: /login
 *
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
// import auth from '../../utils/auth';
// import { login } from '../../actions/AppActions';
import LoadingIndicator from '../../components/LoadingIndicator.react';
import ErrorMessage from '../../components/ErrorMessage.react';

import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { isEmail } from 'validator';
import { find, map, isEmpty } from 'lodash';
import { login } from '../../actions/authActions';
import './index.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const { currentUser, loginError } = this.props;
    const newUser = nextProps.currentUser;
    const newError = nextProps.loginError;

    if (newUser && (newUser !== currentUser)) {
      this.props.history.push('/admin');
    } else if (newError !== loginError) {
      const errors = [];
      if (newError) {
        errors.push({ message: 'Incorrect username or password' });
      }
      this.setState({ errors });
    }
  }

  validateFields = () => {
    const { email, password } = this.state;
    const errors = [];
    if (isEmpty(email)) {
      errors.push({ field: 'email', message: 'Email is required' });
    } else if (!isEmail(email)) {
      errors.push({ field: 'email', message: 'Please enter valid email'});
    }
    if (isEmpty(password)) {
      errors.push({ field: 'password', message: 'Password is required' });
    }

    this.setState({ errors });

    return isEmpty(errors);
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value, errors: [] })

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateFields()) {
      const { email, password } = this.state;
      this.props.login(email, password);
    }
  }

	render() {
    const { email, password, errors } = this.state;
    const { isLoading } = this.props;

		const dispatch = this.props.dispatch;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <ErrorMessage />
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" value={email} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>          
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

const mapStateToProps = state => ({
  currentUser: state.auth.user,
  isLoading: state.auth.isLoading,
  loginError: state.auth.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch);

// Wrap the component to inject dispatch and state into it
// export default connect(select)(LoginPage);
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage));

