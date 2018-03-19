import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class LogIn extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
   
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     
      <div class="modal-dialog modal-dialog-centered" role="document">

      <div class="modal-content" id="mod1-settings">

      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Log In</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

        <div class="d-flex justify-content-center">

        <div class="d-flex justify-content-center" id="mod-settings">

        <form id="l-mod">

          <input type="email" class="form-control" id="input-sizing" placeholder="Email" />
          <input type="password" class="form-control my-3" id="input-sizing" placeholder="Password" />
          <button type="button" class="btn btn-danger my-4" id="input-sizing">Log in</button>
        </form>
          <p class="text-center" >Forgot password?
          <hr />
          </p> 

        <div class="d-flex justify-content-center">
          <div class="d-flex flex-row">
          <p>Don't have an account?</p>
          <a class="ml-2">Sign Up</a>
          </div>

        </div>


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
)(LogIn);
