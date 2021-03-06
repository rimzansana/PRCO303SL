import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class TrainerInputForm extends Component {
  static propTypes = {
    trainerSignup: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="trainer-signup-trainer-input-form">

      <div className="container" id="container-size">
      <p className="lead" id="header-size">Send us your details by filling the fields below and our team will get back to you right away.</p>

      <form>

      <div className="form-group my-5 w-75">
      <label>What is your name?</label>
      <input type="text" className="form-control " placeholder="Name" aria-describedby="h-1" />
      <small id="h-1" className="form-text text-muted">
      
     </small>
      </div>

     <div className="form-group my-5 w-75">
     <label>Tell us your area</label>
     <input type="text" className="form-control" placeholder="ex : ‘Rajagiriya’" />
     </div>


     <div className="form-group my-5 w-75">
     <label>How long have you been training clients for?</label>
     <input type="text" className="form-control" placeholder="Years" aria-describedby="h-3" />
     </div>

    <div className="form-group my-5 w-75">
     <label>Select your area of expertise</label>
     <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option default>Choose...</option>
    <option value="1">Bodybuilding</option>
    <option value="2">Calisthenics</option>
    <option value="3">Bodyweight training</option>
    <option value="4">Cardio training</option>
    </select>
     </div>


     <div className="form-group my-5 w-75">
     <label>Give us your email address</label>
     <input type="text" className="form-control" placeholder="Email Address" />
     </div>

     <button type="submit" className="btn btn-danger my-3 w-25" id="button-clr">Submit</button>

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
)(TrainerInputForm);
