import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';


import Navbar from 'src/features/home/HomeNavigationBar.js';
import LogIn from 'src/features/home/HomeLoginModal';
import SignUp from 'src/features/home/HomeSignupModal.js';
import ResetPass from 'src/features/home/HomeResetPasswordModal.js'
import Banner from 'src/features/trainer-signup/TrainerBanner.js';
import Form from 'src/features/trainer-signup/TrainerInputForm.js';



export class TrainerMain extends Component {
  static propTypes = {
    trainerSignup: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="trainer-signup-trainer-main">

      <Navbar />
      
      <Banner />
      <Form />

      <div>
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
)(TrainerMain);
