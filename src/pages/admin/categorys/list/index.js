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
import { fetchCategorys, removeCategory } from '../../../../actions/categoryActions';

class AdminCategoryList extends Component {
 
  constructor(props) {
    super(props);
    const { match, removeCategory } = this.props;

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
      Header: 'Tweets',
      accessor: 'tweet'
    }, {
      Header: 'Actions',
      Cell: ({ row }) => (
        <div>
        <Link to={`${match.url}/${row.slug}`}><button className="btn btn-info">Edit</button></Link>&nbsp;
        <button className="btn btn-danger" onClick={() => {
          removeCategory(row._original._id);
        }}>Delete</button>
        </div>
      ),
      sortable: false,
    }];
  }

  render() {
    const { match, categorys, isLoading, metadata, fetchCategorys } = this.props;
   
    return (
        <div>
          <Link to={`${match.url}/new`} className="btn btn--dash btn--nav">New Category</Link>
          <ReactTable
            data={categorys}
            pages={metadata.resultset.pages}
            defaultPage={2}
            defaultPageSize={metadata.resultset.pageSize}
            defaultSorted={metadata.resultset.sorted}
            defaultSortDesc={metadata.resultset.sortDesc}
            loading={isLoading}
            columns={this.columns}
            manual
            onFetchData={(state, instance) => {
              fetchCategorys({
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
  isLoading: state.categorys.isLoading,
  categorys: state.categorys.categorys.results,
  metadata: state.categorys.categorys.metadata,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCategorys,
  removeCategory
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminCategoryList));

