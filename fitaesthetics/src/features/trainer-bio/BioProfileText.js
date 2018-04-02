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
        <p className="text-margin text-color lead">Lazar Angelov</p>
         <br />
         <p className="text-margin text-color lead">Kotte , Sri Jayawardanapura</p>
         <br />
         <p className="text-margin text-color lead">8 Years</p>
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
