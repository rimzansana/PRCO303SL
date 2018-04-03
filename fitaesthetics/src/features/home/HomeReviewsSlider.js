import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class HomeReviewsSlider extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (

     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

      <div className="carousel-inner" id="slider-container">

        
        <div className="carousel-item active">

        <div className="d-flex justify-content-center">
            <img src="./src/images/Profile-1.jpg" alt="Picture one" className="rounded-circle" id="pro-settings" />
        </div>

        <div>
            <h5 className="d-flex justify-content-center my-3">Rimzan Sadikeen</h5>
            <p className="d-flex justify-content-center mb-5">Colombo</p>
            <br />  
        </div>

        <div className="d-flex justify-content-center ml-3 mr-2">
            <div id="r-div">
            <p className="text-center">"He asks how I am doing, demonstrates the movements for weightlifting or anything I am uncomfortable with, and pushes me to do that one extra rep! Time, money, and sweat well spent!"</p>
            </div>
        </div>
        </div>
       
        <div className="carousel-item">

        <div className="d-flex justify-content-center">
            <img src="./src/images/Profile-2.jpg" alt="Picture two" className="rounded-circle" id="pro-settings" />
        </div>

        <div>
            <h5 className="d-flex justify-content-center my-3">Ikhwan Ibrahim</h5>
            <p className="d-flex justify-content-center mb-5">Nugegoda</p>
            <br />  
        </div>

        <div className="d-flex justify-content-center ml-3 mr-2">
            <div id="r-div">
            <p className="text-center">"She recognized my weaknesses and directed focus and attention toward correcting those issues long term. I look forward to our continued path of my physical development."</p>
            </div>
        </div>
        
        </div>
       

        <div className="carousel-item">

        <div className="d-flex justify-content-center">
        <img src="./src/images/Profile-3.jpg" alt="Picture three" className="rounded-circle" id="pro-settings" />
        </div>

        <div>
        <h5 className="d-flex justify-content-center my-3">Aroshika Jayasekara</h5>
        <p className="d-flex justify-content-center mb-5">Nawala</p>
        <br />  
        </div>

        <div className="d-flex justify-content-center ml-3 mr-2">
        <div id="r-div">
        <p className="text-center">"I generally get bored easily with working out, but he has kept the sessions interesting. I was seeing results after only 3 sessions. I feel more confident in how I look already."</p>
        </div>
        </div>
        </div>
     
     </div>

     <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span>
        <img src="./src/images/Chevron-left.png" alt="icon name" className="mb-5"/>
        </span>
        <span className="sr-only">Previous</span>
     </a>

     <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span>
        <img src="./src/images/Chevron-right.png" alt="icon name" className="mb-5"/>
        </span>
        <span className="sr-only">Next</span>
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
)(HomeReviewsSlider);
