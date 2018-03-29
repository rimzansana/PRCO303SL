import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Navbar from 'src/features/home/HomeNavigationBar.js';
import Searchbar from 'src/features/home/HomeSearchBar.js';
import TrainerSignUp from 'src/features/home/HomeTrainerSignup.js';
import ReviewSlider from 'src/features/home/HomeReviewsSlider.js';
import Footer from 'src/features/home/HomeFooter.js';
import FeaturedTrainer from 'src/features/home/HomeFeatured.js';




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

        <FeaturedTrainer />

        <TrainerSignUp />

        

         <div id="r-container">
          <h1 className="display-5 text-center" id="r-color">Our Clients</h1>
          <p className="lead text-center">Say About our Trainers</p>
         </div> 


        <ReviewSlider />


        <Footer />

      
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
