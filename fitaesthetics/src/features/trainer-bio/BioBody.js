import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import BioText from 'src/features/trainer-bio/BioBioText.js';
import Box from 'src/features/trainer-bio/BioBookingBox.js';
import Specialization from 'src/features/trainer-bio/BioSpecializationView.js';
import Goals from 'src/features/trainer-bio/BioGoalsView.js';
import Reviews from 'src/features/trainer-bio/BioReviewsView.js';

export class BioBody extends Component {
  static propTypes = {
    trainerBio: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="trainer-bio-bio-body my-3" id="bio-body-height">
       <div className="container">
       <div class="row">
            <div class="container col-8">
                <BioText />
                <hr />
                <Specialization />
                <hr />
                <Goals />
                <hr />
                <Reviews />

            </div>
            <div class="col-4 d-flex justify-content-center">
            <Box />
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
)(BioBody);
