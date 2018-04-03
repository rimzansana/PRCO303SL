import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class BookingStepsText extends Component {
  static propTypes = {
    bookingInfo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="booking-info-booking-steps-text container my-5">
        <h5>Follow two simple steps to book your training sessions.</h5>

        <div  className="row container my-5">
        <p><strong>1. Define your goal</strong></p>
         <p> &nbsp;&nbsp;&nbsp;> &nbsp;  2. Confirm and pay</p>
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
)(BookingStepsText);
