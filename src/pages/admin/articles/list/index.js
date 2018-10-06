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

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchArticles, removeArticle } from '../../../../actions/articleActions';

class AdminArticleList extends Component {
 
  constructor(props) {
    super(props);
    const { match, removeArticle } = this.props;

    this.state = {
      data: [],
      pages: -1,
      loading: true,
    };

    this.columns = [{
      Header: 'Title',
      accessor: 'title' // String-based value accessors!
    }, {
      Header: 'Slug',
      accessor: 'slug',
    }, {
      Header: 'Category',
      accessor: 'category'
    }, {
      Header: 'Author',
      accessor: 'author'
    }, {
      Header: 'Type',
      accessor: 'type'
    }, {
      Header: 'Actions',
      Cell: ({ row }) => (
        <div>
        <Link to={`${match.url}/${row.slug}`}><button className="btn btn-info">Edit</button></Link>&nbsp;
        <button className="btn btn-danger" onClick={() => {
          removeArticle(row._original._id);
        }}>Delete</button>
        </div>
      ),
      sortable: false,
    }];
  }

  render() {
    const { match, articles, isLoading, metadata, fetchArticles } = this.props;
   
    return (
        <div>
          <Link to={`${match.url}/new`} className="btn btn--dash btn--nav">New Article</Link>
          <ReactTable
            data={articles}
            pages={metadata.resultset.pages}
            defaultPage={2}
            defaultPageSize={metadata.resultset.pageSize}
            defaultSorted={metadata.resultset.sorted}
            defaultSortDesc={metadata.resultset.sortDesc}
            loading={isLoading}
            columns={this.columns}
            manual
            onFetchData={(state, instance) => {
              fetchArticles({
                page: state.page,
                pageSize: state.pageSize,
                sorted: state.sorted,
                filtered: state.filtered
              });
            }}
          />
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
  isLoading: state.articles.isLoading,
  articles: state.articles.articles.results,
  metadata: state.articles.articles.metadata,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchArticles,
  removeArticle
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminArticleList));

