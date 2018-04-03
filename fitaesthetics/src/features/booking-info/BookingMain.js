import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Navbar from 'src/features/home/HomeNavigationBar.js';
import BookingBanner from 'src/features/booking-info/BookingBanner.js';
import StepsText from 'src/features/booking-info/BookingStepsText.js';
import Breadcrumb from 'src/features/booking-info/BookingBreadcrumbView.js';
import GoalContainer from 'src/features/booking-info/BookingGoalContainer.js';

export class BookingMain extends Component {
  static propTypes = {
    bookingInfo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="booking-info-booking-main">
        <Navbar />
        <BookingBanner />
        <div id="booking-info-body">
        <StepsText />
        <Breadcrumb />
        <GoalContainer />
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
)(BookingMain);
