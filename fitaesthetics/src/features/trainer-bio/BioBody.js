import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class BioBody extends Component {
  static propTypes = {
    trainerBio: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="trainer-bio-bio-body my-5" id="bio-body-height">
       <div className="container">
       <div class="row">
            <div class="col-8">
                <p className="lead ">Before becoming a bodybuilder and a personal trainer, Lazar Angelov played professional basketball for 10 years. He led his team in scoring for multiple seasons and was one of the best point guards of his class. At the age of 16 he joined the junior national team of Bulgaria and played for a couple of teams in the National Basketball Association of Bulgaria. At the age of 18 he spent an year and a half in the Army, where he found his vocation – bodybuilding. It became a constant part of his life and he went on to earn a certificate for a personal trainer from the National Sports Academy. Lazar started working with people, helping them to reach their maximum potential in developing their bodies.</p>
                <hr />
                <h6>Specialized in</h6>
                <hr />
                <h6>Goals you could accomplish with me</h6>
                <hr />
                <h6>Reviews</h6>
                <p>"He asks how I am doing, demonstrates the movements for weightlifting or anything I am uncomfortable with, and pushes me to do that one extra rep! Time, money, and sweat well spent!"</p>


            </div>
       <div class="col-4">col-4</div>
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
