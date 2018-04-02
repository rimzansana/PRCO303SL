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
      
        <div class="container" id="sticky">
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow">
          <div class="card-header d-flex justify-content-center">
                <div className="row">
                <h5>Rs.</h5>
            <h5 class="my-0 font-weight-normal">20000
             <small class="text-muted"> per month</small>
            </h5>
            </div>
          </div>


          <div class="card-body">
            <div class="row">
            <div class="col">From</div>
            <div class="col">To</div>
            </div>

           
        
              <button type="button" class="btn btn-lg btn-block btn-danger my-5">Book</button>
      
              <hr />

              <div class="row">
            <div class="col-9">You can hire your trainer upto<strong> 12 months</strong></div>
            <div class="col-2"><img src="src/images/Calendar-icon.png" /></div>
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
