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
import { updateCategory, addCategory, fetchSingleCategory } from '../../../../actions/categoryActions';
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as _ from 'lodash';

class AdminCategoryDetail extends Component {

  constructor(props) {
    super(props);

    const { match, fetchSingleCategory } = this.props;

    this.state = {
    };
    this.fetchData();
  }

  async fetchData() {
    const { match, fetchSingleCategory, history } = this.props;

    if (match.params.slug) {
      let category = await fetchSingleCategory(match.params.slug, true);
      if (category) {
        this.setState(_.pick(category, 'title', 'slug', 'tweet', 'color', 'snapchat'));
      } else {
        history.push('/admin/categories');
      }
    }    
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value, errors: [] });

  handleSubmit = async (event) => {
    event.preventDefault();
    let { history, match, category } = this.props;
    let data = _.pick(this.state, 'title', 'slug', 'tweet', 'color', 'snapchat');
    let newData;
    if (match.params.slug) {
      newData = await this.props.updateCategory(category._id, data);      
    } else {
      newData = await this.props.addCategory(data);      
    }
    history.push('/admin/categories');
  }

  render() {
    const { match, isSaving, isLoading } = this.props;
    const { errors } = this.state;
    let title = match.params.slug ? `Category - ${this.state.title}` : 'New Category';
    return (
      <div>
        <h3>{title}</h3>
        <div>
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="title">Title</label>
                <div className="col-sm-10">
                  <input className="form-control" type="text" name="title" value={this.state.title} placeholder="" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="slug">Slug</label>
                <div className="col-sm-10">
                <input className="form-control" type="text" name="slug" value={this.state.slug} placeholder="" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="tweet">Tweet Info</label>
                <div className="col-sm-10">
                <input className="form-control" type="text" name="tweet" value={this.state.tweet} placeholder="" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="color">Color</label>
                <div className="col-sm-10">
                <input className="form-control" type="text" name="color" placeholder="eg: #FF0000" value={this.state.color} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="snapchat">Snapchat Info</label>
                <div className="col-sm-10">
                <input className="form-control" type="text" name="snapchat" value={this.state.snapchat} placeholder="" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12 text-right">
                  <Link to="/admin/categories"><button className="btn btn-warning" type="button">Cancel</button></Link>&nbsp;
                  <button className="btn btn-primary" type="submit" disabled={isSaving}>Save</button>
                </div>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.user,
  isSaving: state.categorys.isSaving,
  isLoading: state.categorys.isLoading,
  category: state.categorys.category,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateCategory,
  addCategory,
  fetchSingleCategory,
}, dispatch);

// Wrap the component to inject dispatch and state into it
// export default connect(select)(LoginPage);
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminCategoryDetail));
