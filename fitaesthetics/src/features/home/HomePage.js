import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class HomePage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (

    <div id="container">

         <nav class="navbar navbar-expand-lg navbar-dark" id="n-container">
            <a class="navbar-brand mb-0 h1" href="#" id="txt-clr" >FitAestheticsLk</a>
           <button className="navbar-toggler" type="button" id="txt-clr" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
           
            <div class="navbar-nav" id="items">
                <a class="nav-item nav-link active p-2" href="#" id="txt-clr">About<span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link p-2" href="#" id="txt-clr">Features</a>
                <a class="nav-item nav-link p-2" href="#" id="txt-clr">Sign up</a>
                <a class="nav-item nav-link p-2" href="#" id="txt-clr">Log in</a>
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
)(HomePage);
