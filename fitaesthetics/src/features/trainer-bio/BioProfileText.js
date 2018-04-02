import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class BioProfileText extends Component {
  static propTypes = {
    trainerBio: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="trainer-bio-bio-profile-text">
        <h1 className="text-margin text-color">Lazar Angelov</h1>
         <p className="text-margin text-color lead">Kotte , Sri Jayawardanapura</p>
         <br />
         <div className="row container">
         <p className="text-margin text-color lead"><strong>Experience :</strong></p>
         <p className="text-margin text-color lead"><strong>8 Years</strong></p>
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
)(BioProfileText);
