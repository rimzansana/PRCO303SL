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
        <button class="btn my-2 my-sm-0 p-3 " type="submit" id="search-button">Search</button>
        </div>

       <div class="carousel-item">
       <img class="d-block w-100" src="..." alt="Second slide" />
       </div>

       <div class="carousel-item">
       <img class="d-block w-100" src="..." alt="Third slide" />
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
