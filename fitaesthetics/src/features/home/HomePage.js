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


        <nav class="navbar navbar-expand-lg navbar-dark" id="nv-container">
          <a class="navbar-brand mb-0 h1" href="#" id="txt-clr">FitAestheticsLk</a>
          <button className="navbar-toggler" type="button" id="txt-clr" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon" />
          </button>
          
          <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
           
            <div class="navbar-nav">
                <a class="nav-item nav-link active p-2" href="#" id="txt-clr">About<span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link p-2" href="#" id="txt-clr">Features</a>
                <a class="nav-item nav-link p-2" href="#" id="txt-clr">Sign up</a>
                <a class="nav-item nav-link p-2" href="#" id="txt-clr">Log in</a>
            </div>
            
          </div>

        </nav>

        
        <div class="jumbotron jumbotron-fluid" id="search-container">
        
          <div class="container" id="search-content">

            <div>
        
            <h1 class="display-4" id="txt-clr">FitAesthetics</h1>
            <p class="lead" id="txt-clr">We bring fitness to your fingertips. Find your personal trainer now.</p>
            <hr class="my-4" />
       
            <form class="form-inline ">
            <input class="form-control mr-sm-2 w-75 p-4 " type="search" placeholder="Try Colombo" aria-label="Search" id="search-input" />
            <button class="btn my-2 my-sm-0 p-3 " type="submit" id="search-button">Search</button>
            </form>

           </div>
          </div>

        </div>


        <div class="jumbotron jumbotron-fluid" id="featured-container">
        
          <div class="container">
          <h1 class="display-5 text-center">Our Featured Trainers</h1>
          <p class="lead text-center">Pick from the highest rated trainers for this month</p>

        <div class="my-sm-5">

          <div class="card-deck">

            <div class="card" id="border-color">
            <img class="card-img-top w-100 p-3" src="/src/images/Profile-1.jpg" alt="Lazar Angelov" id="card-image"/>

              <div class="card-body" id="move">
              <h5 class="card-title text-center">Ulisess Jr</h5>
              <p class="card-text">Ulisses Jr is one of the most sought after and highly respected bodybuilding and body composition coaches in the World.</p>
             
              <button type="button" class="btn btn-danger btn-lg my-sm-2 p-2 w-100">View Profile</button>
        
              </div>

           </div>

            <div class="card" id="border-color">
            <img class="card-img-top w-100 p-3" src="/src/images/Profile-2.jpg" alt="Card image cap" id="card-image"/>

              <div class="card-body">
              <h5 class="card-title text-center">Simeon Panda</h5>
              <p class="card-text">hetics® Sportswear and Just Lift.®, he is a fitness entrepreneur who is featured on Forbes as one of the worlds top ten influencers for fitness</p>
              <button type="button" class="btn btn-danger btn-lg my-sm-2 p-2 w-100 ">View Profile</button>
              </div>

            </div>

            <div class="card" id="border-color">
            <img class="card-img-top w-100 p-3" src="/src/images/Profile-3.jpg" alt="Card image cap" id="card-image"/>

              <div class="card-body">
              <h5 class="card-title text-center">Lazar Angelov</h5>
              <p class="card-text"> Lazar dominates other bodybuilders with balanced physique and incredible definition.As a personal trainer he has been able to transform the bodies of thousands of people and to make his motivation and knowledge contagious to them.</p>
              <button type="button" class="btn btn-danger btn-lg my-sm-2 p-2 w-100 ">View Profile</button>
              </div>

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
