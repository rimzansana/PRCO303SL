import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class NavigationBar extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-navigation-bar">
         <nav className="navbar navbar-expand-lg navbar-dark" id="nv-container">
          <a className="navbar-brand mb-0 h1" href="#" id="txt-clr">FitAestheticsLk</a>
          <button className="navbar-toggler" type="button" id="txt-clr" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon" />
          </button>
          
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
           
            <div className="navbar-nav">
                <a className="nav-item nav-link active p-2" href="#" id="txt-clr">About<span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link p-2" href="#" id="txt-clr">Features</a>
                <a className="nav-item nav-link p-2" href="" data-toggle="modal" data-target="#SignUP" id="txt-clr">Sign up</a>
                <a className="nav-item nav-link p-2" href="" data-toggle="modal" data-target="#LogIN" id="txt-clr">Log in</a>
            </div>
            
          </div>

        </nav>
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
)(NavigationBar);
