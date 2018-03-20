import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';


import Navbar from 'src/features/home/NavigationBar.js';
import LogIn from 'src/features/home/LogIn.js';
import SignUp from 'src/features/home/SignUp.js';
import ResetPass from 'src/features/home/ResetPassword.js'



export class Main extends Component {
  static propTypes = {
    trainerSignup: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="trainer-signup-main">

      <Navbar />
      <LogIn />
      <SignUp />
      <ResetPass />



      

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
)(Main);
