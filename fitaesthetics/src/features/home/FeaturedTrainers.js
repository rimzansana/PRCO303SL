import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class FeaturedTrainers extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div class="jumbotron jumbotron-fluid" id="featured-container">
        
          <div class="container mb-5">
          <h1 class="display-5 text-center">Our Featured Trainers</h1>
          <p class="lead text-center">Pick from the highest rated trainers for this month</p>

        <div class="my-sm-5">

          <div class="card-deck">

            <div class="card" id="border-color">
            <img class="card-img-top w-100 p-3" src="/src/images/Profile-1.jpg" alt="Lazar Angelov" id="card-image"/>

              <div class="card-body">
              <h5 class="card-title text-center">Ulisess Jr</h5>
              <p class="card-text">Ulisses Jr is one of the most sought after and highly respected bodybuilding and body composition coaches in the World.</p>
              </div>
                
              <button type="button" class="btn btn-danger btn-lg my-sm-5 p-2 ml-4 mr-4 mb-3" id="button-color">View Profile</button>

             </div>

            <div class="card" id="border-color">
            <img class="card-img-top w-100 p-3" src="/src/images/Profile-2.jpg" alt="Card image cap" id="card-image"/>

              <div class="card-body">
              <h5 class="card-title text-center">Simeon Panda</h5>
              <p class="card-text">hetics® Sportswear and Just Lift.®, he is a fitness entrepreneur who is featured on Forbes as one of the worlds top ten influencers for fitness</p>
              </div>

              <button type="button" class="btn btn-danger btn-lg my-sm-5 p-2 ml-4 mr-4 mb-3" id="button-color">View Profile</button>

            </div>

            <div class="card" id="border-color">
            <img class="card-img-top w-100 p-3" src="/src/images/Profile-3.jpg" alt="Card image cap" id="card-image"/>

              <div class="card-body">
              <h5 class="card-title text-center">Lazar Angelov</h5>
              <p class="card-text">As a personal trainer he has been able to transform the bodies of thousands of people and to make his motivation and knowledge contagious to them.</p>
              </div>

              <button type="button" class="btn btn-danger btn-lg my-sm-5 p-2 ml-4 mr-4 mb-3" id="button-color">View Profile</button>

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
)(FeaturedTrainers);
