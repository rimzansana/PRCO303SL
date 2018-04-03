import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class HomeFeatured extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-home-featured">
      <div className="pb-md-4 mx-auto text-center">
      <h1 className="display-5 text-center">Our Featured Trainers</h1>
      <p className="lead">Pick from the highest rated trainers for this month</p>
    </div>

    <div className="container">
      <div className="card-deck text-center">


        <div className="card mb-4 box-shadow">
         <div className="card-body">

          
            <img className="rounded-circle" src="/src/images/Profile-1.jpg" alt="Image1" width="140" height="140" />
            <h2 className="my-4">Ulisess Jr</h2>
            <p>Ulisses Jr is one of the most sought after and highly respected bodybuilding and body composition coaches in the World.</p>
          
           
         </div>

            <div className="w-100 mb-5">
            <button type="button" className="btn btn-lg  btn-outline-danger w-75">View Profile</button>
            </div>


        </div>

         <div className="card mb-4 box-shadow">
         <div className="card-body">

            <div>
            <img className="rounded-circle" src="/src/images/Profile-2.jpg" alt="Image2" width="140" height="140" />
            <h2 className="my-4">Simeon Panda</h2>
            <p>hetics® Sportswear and Just Lift.®, he is a fitness entrepreneur who is featured on Forbes as one of the worlds top ten influencers for fitness</p>
            </div>
     
         </div>

            <div className="w-100 mb-5">
            <button type="button" className="btn btn-lg  btn-outline-danger w-75">View Profile</button>
            </div>


        </div>

         <div className="card mb-4 box-shadow">
         <div className="card-body">

            <div>
            <img className="rounded-circle" src="/src/images/Profile-3.jpg" alt="Image3" width="140" height="140" />
            <h2 className="my-4">Lazar Angelov</h2>
            <p>As a personal trainer he has been able to transform the bodies of thousands of people and to make his motivation and knowledge contagious to them</p>
            </div>

         </div>

            <div className="w-100 mb-5">
            <button type="button" className="btn btn-lg  btn-outline-danger w-75">View Profile</button>
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
)(HomeFeatured);
