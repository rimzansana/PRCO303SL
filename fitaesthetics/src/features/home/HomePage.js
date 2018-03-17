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
        
        <div class="container" id="move">

        <div id="more">
        
          <h1 class="display-4" id="txt-clr">FitAesthetics</h1>
          <p class="lead" id="txt-clr">We bring fitness to your fingertips. Find your personal trainer now.</p>
          <hr class="my-4" />
       
          <form class="form-inline ">
          <input class="form-control mr-sm-2 w-75 p-4 " type="search" placeholder="Try Colombo" aria-label="Search" id="type" />
          <button class="btn my-2 my-sm-0 p-3 " type="submit" id="but-col">Search</button>
          </form>

       </div>
        </div>

        </div>

        <div class="jumbotron jumbotron-fluid" id="bg-col">
        
          <div class="container">
          <h1 class="display-4 text-center">Our Featured Trainers</h1>
          <p class="lead text-center">Our highest rated trainers for the month</p>

       
          <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      
    </div>
  </div>
</div>

  

          </div>

        </div>

       
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
        
          <div className="carousel-inner">
          

          <div className="carousel-item active">
          <img className="d-block w-100" src="/src/images/HomeImage.jpg" alt="First slide" />
          </div>
   
         <div className="carousel-item">
         <img className="d-block w-100" src="/src/images/pic1.png" alt="Second slide" />
          </div>
    
         <div className="carousel-item">
         <img className="d-block w-100" src="/src/images/pic3.jpg" alt="Third slide" />
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
