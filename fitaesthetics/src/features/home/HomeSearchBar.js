import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class HomeSearchBar extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      
         <div className="jumbotron jumbotron-fluid" id="search-container">
        
          <div className="container" id="search-content">

            <div className="ml-5">
        
            <h1 className="display-4" id="txt-clr">FitAesthetics</h1>
            <p className="lead" id="txt-clr">We bring fitness to your fingertips. Find your personal trainer now.</p>
            <hr className="my-4" />
       
            <form className="form-inline ">
            <input className="form-control mr-sm-2 w-75 p-4 " type="search" placeholder="Try Colombo" aria-label="Search" id="search-input" />
            <button className="btn my-2 my-sm-0 p-3 " type="submit" id="search-button">Search</button>
            </form>

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
)(HomeSearchBar);
