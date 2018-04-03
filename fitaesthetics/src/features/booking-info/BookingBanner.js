import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class BookingBanner extends Component {
  static propTypes = {
    bookingInfo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="booking-info-booking-banner">
        <div className="jumbotron jumbotron-fluid" id="search-container">
        
          <div className="container">
            <h2 className="txt-clr">Start your life changing journey <br /> now</h2>   
          
          </div>

        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    bookingInfo: state.bookingInfo,
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
)(BookingBanner);
