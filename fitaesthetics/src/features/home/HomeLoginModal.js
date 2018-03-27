import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class HomeLoginModal extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
   
      <div className="modal fade" id="LogIN" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     
      <div className="modal-dialog modal-dialog-centered" role="document">

      <div className="modal-content" id="mod1-settings">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Log In</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

        <div className="d-flex justify-content-center">

        <div className="d-flex justify-content-center" id="mod-settings">

        <form id="l-mod">

          <input type="email" className="form-control"  placeholder="Email" />
          <input type="password" className="form-control my-3"  placeholder="Password" />
          <button type="button" className="btn btn-danger my-4" id="input-sizing">Log in</button>
        </form>

        <div>
            <div className="d-flex justify-content-center">
            <a href="" data-toggle="modal" data-target="#Reset" data-dismiss="modal">Forgot your password</a>
            </div>
          <hr />
         </div>
 

        <div className="d-flex justify-content-center">
          <div className="d-flex flex-row">
          <p>Don't have an account?</p>
         <a id="link-textcolor" className="ml-2" href="" data-toggle="modal" data-target="#SignUP" data-dismiss="modal">Sign up</a>
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
)(HomeLoginModal);
