import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class BioBioText extends Component {
  static propTypes = {
    trainerBio: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="trainer-bio-bio-bio-text">
       <p className="lead ">Before becoming a bodybuilder and a personal trainer, Lazar Angelov played professional basketball for 10 years. He led his team in scoring for multiple seasons and was one of the best point guards of his class. At the age of 16 he joined the junior national team of Bulgaria and played for a couple of teams in the National Basketball Association of Bulgaria. At the age of 18 he spent an year and a half in the Army, where he found his vocation – bodybuilding. It became a constant part of his life and he went on to earn a certificate for a personal trainer from the National Sports Academy. Lazar started working with people, helping them to reach their maximum potential in developing their bodies.</p>
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
)(BioBioText);
