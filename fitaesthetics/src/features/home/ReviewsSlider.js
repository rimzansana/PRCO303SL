import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class ReviewsSlider extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (

     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

      <div class="carousel-inner" id="slider-container">

        
        <div class="carousel-item active">

        <div class="d-flex justify-content-center">
        <img src="./src/images/Profile-1.jpg" alt="Picture one" class="rounded-circle" id="pro-settings" />
        </div>

        <div>
        <h5 class="d-flex justify-content-center my-3">Rimzan Sadikeen</h5>
        <p class="d-flex justify-content-center mb-5">Colombo</p>
        <br />  
        </div>

        <div class="d-flex justify-content-center ml-5 mr-2">
        <div id="flock">
        <p class="text-center">He asks how I am doing, demonstrates the movements for weightlifting or anything I am uncomfortable with, and pushes me to do that one extra rep! Time, money, and sweat well spent!</p>
        </div>
        </div>
        

      
        </div>
       
        <div class="carousel-item">

        <div class="d-flex justify-content-center">
        <img src="./src/images/Profile-2.jpg" alt="Picture two" class="rounded-circle" id="pro-settings" />
        </div>

        <div>
        <h5 class="d-flex justify-content-center my-3">Ikhwan Ibrahim</h5>
        <p class="d-flex justify-content-center mb-5">Nugegoda</p>
        <br />  
        </div>

        <div class="d-flex justify-content-center ml-5 mr-2">
        <div id="flock">
        <p class="text-center">She recognized my weaknesses and directed focus and attention toward correcting those issues long term. I look forward to our continued path of my physical development.</p>
        </div>
        </div>
        

      
        </div>
       

        <div class="carousel-item">

        <div class="d-flex justify-content-center">
        <img src="./src/images/Profile-3.jpg" alt="Picture three" class="rounded-circle" id="pro-settings" />
        </div>

        <div>
        <h5 class="d-flex justify-content-center my-3">Aroshika Jayasekara</h5>
        <p class="d-flex justify-content-center mb-5">Nawala</p>
        <br />  
        </div>

        <div class="d-flex justify-content-center ml-5 mr-2">
        <div id="flock">
        <p class="text-center">I generally get bored easily with working out, but he has kept the sessions interesting. I was seeing results after only 3 sessions. I feel more confident in how I look already.</p>
        </div>
        </div>
        

      
        </div>
     
     </div>

     <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
     <span>
     <img src="./src/images/Chevron-left.png" alt="icon name" />
     </span>
     <span class="sr-only">Previous</span>
     </a>

     <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
     <span>
     <img src="./src/images/Chevron-right.png" alt="icon name" />
     </span>
     <span class="sr-only">Next</span>
     </a>

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
)(ReviewsSlider);
