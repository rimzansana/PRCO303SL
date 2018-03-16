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
          <a class="navbar-brand mb-0 h1" href="#" id="txt-clr">FitAestheticsLk</a>
          <button className="navbar-toggler" type="button" id="txt-clr" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon" />
          </button>
          
          <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
           
            <div class="navbar-nav" id="items">
                <a class="nav-item nav-link active p-2" href="#" id="txt-clr">About<span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link p-2" href="#" id="txt-clr">Features</a>
                <a class="nav-item nav-link p-2" href="#" id="txt-clr">Sign up</a>
                <a class="nav-item nav-link p-2" href="#" id="txt-clr">Log in</a>
            </div>
            
          </div>

        </nav>

        
        <div class="jumbotron jumbotron-fluid" id="j-col">

        <div class="container">
          <h1 class="display-4" id="txt-clr">FitAesthetics</h1>
          <p class="lead" id="txt-clr"> <h8>We bring fitness to your fingertips. Find your personal trainer now.</h8></p>
          <hr class="my-4" />
       
          <form class="form-inline ">

            <input class="form-control mr-sm-2 w-50 p-2" type="search" placeholder="Try Colombo" aria-label="Search" />
            <button class="btn my-2 my-sm-0 p-2" type="submit" id="but-col">Search</button>
          </form>

        </div>

        </div>

        <div class="jumbotron jumbotron-fluid" id="bg-col">
        
          <div class="container">
          <h1 class="display-4 text-center">Our Featured Trainers</h1>
          <p class="lead text-center">Our highest rated trainers for the month</p>

       
          <div class="card" id="crd">
  <img class="card-img-top" src="..." alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

   






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
)(HomePage);
