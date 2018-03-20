import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class SignUpForm extends Component {
  static propTypes = {
    trainerSignup: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="trainer-signup-sign-up-form">

      <div className="container" id="container-size">
      <p className="lead" id="header-size">Send us your details by filling the fields below and our team will get back to you right away.</p>

      <form>

      <div class="form-group my-5 w-75">
      <label for="formGroupExampleInput">What is your name?</label>
      <input type="text" class="form-control " placeholder="Name" aria-describedby="h-1" />
      <small id="h-1" class="form-text text-muted">
      
     </small>
      </div>

     <div class="form-group my-5 w-75">
     <label for="formGroupExampleInput2">Tell us your area</label>
     <input type="text" class="form-control" placeholder="ex : ‘Rajagiriya’" />
     </div>


     <div class="form-group my-5 w-75">
     <label for="formGroupExampleInput2">How long have you been training clients for?</label>
     <input type="text" class="form-control" placeholder="Years" aria-describedby="h-3" />
     </div>

    <div class="form-group my-5 w-75">
     <label for="formGroupExampleInput2">Select your area of expertise</label>
     <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Choose...</option>
    <option value="1">Bodybuilding</option>
    <option value="2">Calisthenics</option>
    <option value="3">Bodyweight training</option>
    <option value="4">Cardio training</option>
    </select>
     </div>


     <div class="form-group my-5 w-75">
     <label for="formGroupExampleInput2">Give us your email address</label>
     <input type="text" class="form-control" placeholder="Email Address" />
     </div>

     <button type="submit" class="btn btn-danger my-3 w-25">Submit</button>

     </form>
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
)(SignUpForm);
