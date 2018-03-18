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
        </div>
       

        <div class="carousel-item">
        <div class="d-flex justify-content-center">
        <img src="./src/images/Profile-2.jpg" alt="Picture two" class="rounded-circle" id="pro-settings" />
        </div>
        </div>

        <div class="carousel-item">
        <div class="d-flex justify-content-center">
        <img src="./src/images/Profile-3.jpg" alt="Picture three" class="rounded-circle" id="pro-settings" />
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
