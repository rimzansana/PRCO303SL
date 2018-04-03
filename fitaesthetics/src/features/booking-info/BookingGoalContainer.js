import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class BookingGoalContainer extends Component {
  static propTypes = {
    bookingInfo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="booking-info-booking-goal-container">
      <div className="container my-5">

       <div className="row">

            <div className="col">
            <h3>Define your goal</h3>

            <p>What is your goal?</p>

            <div className="input-group mb-3 w-75">
            <select className="custom-select" id="inputGroupSelect02">
                <option defaultValue>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            </div>


            <p>I want to train</p>

            <div className="input-group mb-3 w-75">
            <select className="custom-select" id="inputGroupSelect02">
                <option defaultValue>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            </div>

            <button type="submit" className="btn btn-danger my-3 w-75 " id="button-clr">Continue</button>

            </div>



            

            <div className="col">
            2 of 2
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
)(BookingGoalContainer);
