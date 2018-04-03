import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class HomeSignupModal extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (

    <div className="modal fade" id="SignUP" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     
      <div className="modal-dialog modal-dialog-centered" role="document">

      <div className="modal-content" id="mod1-settings">

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Sign Up</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="d-flex justify-content-center">

        <div className="d-flex justify-content-center" id="mod-settings">
        <form id="n-mod">

          <input type="email" className="form-control my-2"  placeholder="Email" />
          <input type="text" className="form-control my-2"  placeholder="First Name" />
          <input type="text" className="form-control my-2"  placeholder="last Name" />
          <input type="password" className="form-control my-2"  placeholder="Password" />
          <button type="button" className="btn btn-danger my-4" id="input-sizing">Sign up</button>
        </form>

        <div>
        <hr />
        </div>

        <div className="d-flex justify-content-center">

          <div className="d-flex flex-row">
            <p>Already have an account?</p>
            <a id="link-textcolor" className="ml-2" href="" data-toggle="modal" data-target="#LogIN" data-dismiss="modal">Log in</a>
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
)(HomeSignupModal);
