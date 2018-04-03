import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class SearchPageNavigator extends Component {
  static propTypes = {
    search: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="search-search-page-navigator">
        
        <div className="container my-5">
            <nav>
                 <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
            
                    <li className="page-item item-danger active"><a className="page-link red-text" href="#">1</a></li>
                    <li className="page-item"><a className="page-link red-text" href="#">2</a></li>
                    <li className="page-item"><a className="page-link red-text" href="#">3</a></li>
                    <li className="page-item">

                    <a className="page-link red-text" href="#">Next</a>
                    </li>
                 </ul>
           </nav>

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
)(SearchPageNavigator);
