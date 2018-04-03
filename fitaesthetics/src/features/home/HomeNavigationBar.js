import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';


import LogIn from 'src/features/home/HomeLoginModal.js';
import SignUp from 'src/features/home/HomeSignupModal.js';
import ResetPass from 'src/features/home/HomeResetPasswordModal.js'
import Review from 'src/features/home/ReviewModal.js';

export class HomeNavigationBar extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-home-navigation-bar">
      
         <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="nv-container">
          <a className="navbar-brand mb-0 h1 txt-clr" href="/">FitAestheticsLk</a>
          <button className="navbar-toggler txt-clr" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon" />
          </button>
          
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
           
            <div className="navbar-nav">
                <a className="nav-item nav-link active p-2 txt-clr" href="#">About<span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link p-2 txt-clr" href="" data-toggle="modal" data-target="#Review">Features</a>
                <a className="nav-item nav-link p-2 txt-clr" href="" data-toggle="modal" data-target="#SignUP">Sign up</a>
                <a className="nav-item nav-link p-2 txt-clr" href="" data-toggle="modal" data-target="#LogIN">Log in</a>
            </div>
            
          </div>

        </nav>

        <LogIn />

        <SignUp />

        <ResetPass />

        <Review />
        
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
)(HomeNavigationBar);
