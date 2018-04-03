import React, { Component } from 'react';

export default class ReviewModal extends Component {
  static propTypes = {

  };

  render() {
    return (
        
    <div className="home-review-modal"> 

        <div className="modal fade" id="Review" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     
        <div className="modal-dialog modal-dialog-centered" role="document">

        <div className="modal-content" id="mod1-settings">

        <div className="modal-header">

            <div className="column">
                <h5 className="modal-title" id="exampleModalLongTitle">Rate and review</h5>
                <p id="italic-header"><small>Your review will be posted publicly on the site</small></p>
            </div>
        
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>

        </div>

    <div className="d-flex justify-content-center">

        <div className="d-flex justify-content-center">
            <form id="l-mod">
                <textarea type="text" className="form-control"  placeholder="Describe your experience" id="review-input"/>
                <button type="button" className="btn btn-danger my-4" id="input-sizing">Submit review</button>
            </form>
        </div>
        
    </div> 

        </div>
        </div>
        </div>
    </div>

    );
  }
}
