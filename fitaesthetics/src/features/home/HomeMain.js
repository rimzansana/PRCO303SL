import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Navbar from 'src/features/home/HomeNavigationBar.js';
import Searchbar from 'src/features/home/HomeSearchBar.js';
import Featured from 'src/features/home/HomeFeaturedTrainers.js';
import TrainerSignUp from 'src/features/home/HomeTrainerSignup.js';
import ReviewSlider from 'src/features/home/HomeReviewsSlider.js';
import LogIn from 'src/features/home/HomeLoginModal.js';
import SignUp from 'src/features/home/HomeSignupModal.js';
import ResetPass from 'src/features/home/HomeResetPasswordModal.js'





export class HomeMain extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (

    <div id="container">
    
        <Navbar />
       
        <Searchbar />

        <Featured />

        <TrainerSignUp />

         <div id="r-container">
          <h1 className="display-5 text-center" id="r-color">Our Clients</h1>
          <p className="lead text-center">Say About our Trainers</p>
         </div> 

        <ReviewSlider />

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
    home: state.home,
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
)(HomeMain);
