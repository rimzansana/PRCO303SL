import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class BioReviewsView extends Component {
  static propTypes = {
    trainerBio: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="trainer-bio-bio-reviews-view">
            <div className="row">
                
                <div className="col-sm">
                <h6>Reviews</h6>
                </div>

                <div className="col-sm d-flex justify-content-end">
                <img src="src/images/Review-icon.png" className="image-prop"/>
                </div>
                </div>

                <div className="my-5">
                <p>"He asks how I am doing, demonstrates the movements for weightlifting or anything I am uncomfortable with, and pushes me to do that one extra rep! Time, money, and sweat well spent!"</p>

                <div className="row container">
                <p>-</p>
                <p>Rimzan Sadikeen</p>
                </div>

                </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    trainerBio: state.trainerBio,
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
)(BioReviewsView);
