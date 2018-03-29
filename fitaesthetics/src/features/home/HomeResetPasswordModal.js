import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class HomeResetPasswordModal extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
     <div className="modal fade" id="Reset" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     
      <div className="modal-dialog modal-dialog-centered" role="document">

      <div className="modal-content" id="hod1-settings">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Reset Password</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

          
        <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center mt-4" id="hod-settings">

        <form id="h-mod">
        <p className="lead text-center">Enter your email associated with your account and we will email you a link to reset your password</p>
          <input type="email" className="form-control my-4"  placeholder="Email" />
        </form>



        </div>
        
        </div>

        <div className="d-flex justify-content-center mb-5">
          <div className="d-flex flex-row">
          <a id="link-textcolor" className="my-2 mr-5" href="" data-toggle="modal" data-target="#LogIN" data-dismiss="modal"> Back to Login</a>
            <button type="button" className="btn btn-danger ml-5" >Send Link</button>
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
)(HomeResetPasswordModal);
