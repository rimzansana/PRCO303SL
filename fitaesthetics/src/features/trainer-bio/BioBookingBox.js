import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class BioBookingBox extends Component {
  static propTypes = {
    trainerBio: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="trainer-bio-bio-booking-box">
      
        <div className="container d-flex justify-content-center " id="sticky">
        <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">

        <div className="card-header d-flex justify-content-center">
            <div className="row">
            <h5>Rs.</h5>
            <h5 className="my-0 font-weight-normal">20000
            <small className="text-muted"> per month</small>
            </h5>
            </div>
        </div>


        <div className="card-body">
            <div className="row">
             <div className="col">From</div>
             <div className="col">To</div>
            </div>
   
             <button type="button" className="btn btn-lg btn-block btn-danger my-5">Book</button>  
             <hr />

            <div className="row">
                <div className="col-9">You can hire your trainer upto<strong> 12 months</strong></div>
                <div className="col-2"><img src="src/images/Calendar-icon.png" /></div>
            </div>

        </div>

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
    trainerBio: state.trainerBio,
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
)(BioBookingBox);
