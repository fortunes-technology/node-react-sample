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
import { updateArticle, addArticle, fetchSingleArticle } from '../../../../actions/articleActions';
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as _ from 'lodash';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/inline_style.min.js';
import 'froala-editor/js/plugins/code_view.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import { CATEGORIES } from '../../../../constants/AppConstants';

class AdminArticleDetail extends Component {

  constructor(props) {
    super(props);

    const { match, fetchSingleArticle } = this.props;

    this.state = {
      title: '',
      slug: '',
      category: '',
      author: '',
      photographBy: '',
      content: '',      
      type: 'photo',
      thumbnail: '',
      photo: '',
      video: '',
      shortDescription: ''
    };
    this.fields = ['title', 'slug', 'category', 'author', 'photographBy', 'content', 'type', 'thumbnail', 'photo', 'video', 'shortDescription'];
    this.contentEditorConfig = {
      codeMirror: window.codeMirror,
    };
    this.fetchData();
  }

  async fetchData() {
    const { match, fetchSingleArticle, history } = this.props;

    if (match.params.slug) {
      let article = await fetchSingleArticle(match.params.slug, true);
      if (article) {
        this.setState(_.pick(article, ...this.fields));
      } else {
        history.push('/admin/articles');
      }
    }    
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value, errors: [] });
  handleContentChange = (model) => this.setState({ content: model, errors: [] });

  handleSubmit = async (event) => {
    event.preventDefault();
    let { history, match, article } = this.props;
    let data = _.pick(this.state, ...this.fields);

    let newData;
    if (match.params.slug) {
      newData = await this.props.updateArticle(article._id, data);      
    } else {
      newData = await this.props.addArticle(data);      
    }
    if (newData) {
      history.push('/admin/articles');
    } else {
      console.log('HALA something is wrong');
    }
  }

  renderCategoryOptions() {
    return CATEGORIES.map(category => (
      <option value={category.slug} key={category.slug}>{category.title}</option>
      )
    )
  }

  render() {
    const { match, isSaving, isLoading } = this.props;
    const { errors } = this.state;
    let title = match.params.slug ? `Article - ${this.state.title}` : 'New Article';
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
                <label className="col-sm-2 col-form-label" htmlFor="category">Category</label>
                <div className="col-sm-10">
                <select className="form-control" name="category" value={this.state.category} onChange={this.handleChange}>
                {this.renderCategoryOptions()}
                </select>                
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="shortDescription">Short Description</label>
                <div className="col-sm-10">
                <input className="form-control" type="text" name="shortDescription" value={this.state.shortDescription} placeholder="" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="author">Author</label>
                <div className="col-sm-10">
                <input className="form-control" type="text" name="author" placeholder="" value={this.state.author} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="photographBy">Photograph By</label>
                <div className="col-sm-10">
                <input className="form-control" type="text" name="photographBy" value={this.state.photographBy} placeholder="" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="type">Type</label>
                <div className="col-sm-10">
                  <select className="form-control" name="type" value={this.state.type} onChange={this.handleChange}>
                    <option value="photo">Photo</option>
                    <option value="video">Video</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="thumbnail">Thumbnail</label>
                <div className="col-sm-10">
                <input className="form-control" type="text" name="thumbnail" value={this.state.thumbnail} placeholder="" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="photo">Photo</label>
                <div className="col-sm-10">
                <input className="form-control" type="text" name="photo" value={this.state.photo} aria-describedby="photoHelp"  onChange={this.handleChange}/>
                <small id="photoHelp" className="form-text text-muted">For video, it should be screenshot of the video.</small>
                </div>
              </div>
              {this.state.type === 'photo' ? '' : 
                ( <div className="form-group row" >
                    <label className="col-sm-2 col-form-label" htmlFor="video">Video</label>
                    <div className="col-sm-10">
                    <input className="form-control" type="text" name="video" value={this.state.video} placeholder="" onChange={this.handleChange}/>
                    </div>
                  </div>
                )
              }
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Content</label>
                <div className="col-sm-10">
                  <FroalaEditor
                    tag='textarea'
                    config={this.contentEditorConfig}
                    model={this.state.content}
                    onModelChange={this.handleContentChange}
                  />              
                </div>
              </div>              
              <div className="form-group row">
                <div className="col-sm-12 text-right">
                  <Link to="/admin/articles"><button className="btn btn-warning" type="button">Cancel</button></Link>&nbsp;
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
  isSaving: state.articles.isSaving,
  isLoading: state.articles.isLoading,
  article: state.articles.article,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateArticle,
  addArticle,
  fetchSingleArticle,
}, dispatch);

// Wrap the component to inject dispatch and state into it
// export default connect(select)(LoginPage);
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminArticleDetail));
