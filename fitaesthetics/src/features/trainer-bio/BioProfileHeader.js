import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import ProfilePicture from 'src/features/trainer-bio/BioProfilePicture.js';
import ProfileText from 'src/features/trainer-bio/BioProfileText.js';

export class BioProfileHeader extends Component {
  static propTypes = {
    trainerBio: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
     
       <div className="jumbotron jumbotron-fluid" id="profile-header">
        
         <div className="container my-5 ">
        
         <div className="row d-flex align-items-center" id="row-height">
       
         <div className="col-sm">
         <ProfilePicture />
         </div>

         <div className="col-sm" id="name">
         <ProfileText />
         </div>

         <div className="col-sm d-flex justify-content-end">
         <p className="text-margin text-color lead">5 Reviews</p>
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
)(BioProfileHeader);
