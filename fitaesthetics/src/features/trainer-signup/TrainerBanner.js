import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class TrainerBanner extends Component {
  static propTypes = {
    trainerSignup: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
        
          <div className="jumbotron jumbotron-fluid" id="search-container">
        
          <div className="container">
            <h1 id="txt-clr">We connect trainers like you <br />to clients</h1>   
          </div>

        </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    trainerSignup: state.trainerSignup,
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
)(TrainerBanner);
