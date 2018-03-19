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

        <div class="d-flex justify-content-center">

        <div class="d-flex justify-content-center" id="mod-settings">

      

        <form id="l-mod">
          <input type="email" class="form-control" id="input-sizing" placeholder="Email" />
          <br />
          <input type="password" class="form-control" id="input-sizing" placeholder="Password" />
          <button type="button" class="btn btn-danger my-5" id="input-sizing">Log in</button>
        </form>
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
