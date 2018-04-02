import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class BioProfileHeader extends Component {
  static propTypes = {
    trainerBio: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
     
       <div className="jumbotron jumbotron-fluid" id="profile-header">
        
         <div class="container my-5 ">
        
         <div class="row d-flex align-items-center" id="row-height">
       
         <div class="col-sm" id="txt-clr">
         <img class="card-img-right flex-auto d-none d-md-block h-100" src="/src/images/card-profile.jpg" alt="Card image cap" id="profile-picture"/>
         </div>
         <div class="col-sm" id="txt-clr">
         <p className="text-margin">Lazar Angelov</p>
         <br />
         <p className="text-margin">Kotte , Sri Jayawardanapura</p>
         <br />
         <p className="text-margin">8 Years</p>
         </div>
        <div class="col-sm text-right" id="txt-clr">
    
        <p className="text-margin">5 Reviews</p>
    
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
