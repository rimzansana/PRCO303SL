import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class SearchFilterButtons extends Component {
  static propTypes = {
    search: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="search-search-filter-buttons">
      
        <div className="container my-5">

        <div className="dropdown">
        <button className="btn btn-lg dropdown-toggle button-settings" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
         City 
        </button>

       <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
       <a className="dropdown-item" href="#">Action</a>
       <a className="dropdown-item" href="#">Another action</a>
       <a className="dropdown-item" href="#">Something else here</a>
       </div>
       </div>

       

        </div>


      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    search: state.search,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilterButtons);
