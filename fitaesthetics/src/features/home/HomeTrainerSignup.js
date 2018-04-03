import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class HomeTrainerSignup extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (

  <div class="jumbotron jumbotron-fluid" id="search-container"> 
         
          <div class="container d-flex flex-row-reverse"> 
 
            <div> 
         
            <h1 class="display-5 text-right" id="txt-clr">Are you a personal trainer looking to <br />grow your client base?</h1> 
            <br /> 
            <p class="lead d-flex flex-row-reverse" id="txt-clr">Sign up to work with new local clients</p> 
            <hr class="my-4" />   
            <button class="btn my-2 my-sm-1 p-3 float-right w-50" id="search-button">Learn more</button> 
          
 
           </div> 
          </div> 
 
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
)(HomeTrainerSignup);
