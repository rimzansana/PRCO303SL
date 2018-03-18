import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Navbar from 'src/features/home/NavigationBar.js';
import Searchbar from 'src/features/home/SearchBar.js';
import Featured from 'src/features/home/FeaturedTrainers.js';
import TrainerSignUp from 'src/features/home/TrainerSignup.js';
import ReviewSlider from 'src/features/home/ReviewsSlider.js';
import LogIn from 'src/features/home/LogIn.js';





export class HomePage extends Component {
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
          <h1 class="display-5 text-center" id="r-color">Our Clients</h1>
          <p class="lead text-center">Say About our Trainers</p>
         </div> 

        <ReviewSlider />

        <LogIn />
      
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
)(HomePage);
