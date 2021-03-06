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

  <div className="jumbotron jumbotron-fluid" id="search-container"> 
         
          <div className="container d-flex flex-row-reverse"> 
 
            <div> 
         
            <h1 className="display-5 text-right txt-clr">Are you a personal trainer looking to <br />grow your client base?</h1> 
            <br /> 
            <p className="lead d-flex flex-row-reverse txt-clr">Sign up to work with new local clients</p> 
            <hr className="my-4" />   
            <a href="/trainer-signup"><button className="btn my-2 my-sm-1 p-3 float-right w-50" id="search-button">Learn more</button></a>
          
 
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
