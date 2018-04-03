import React, { Component } from 'react';

export default class HomeFooter extends Component {
  static propTypes = {

  };

  render() {
    return (
     <div>
      <hr />

      <div className="my-3">
        <footer class="container py-4" >
        <div className="row">

            <div className="col-12 col-md">
            <div id="info-text">
                <img src="src/images/mail.png" width="24" height="24"></img>
                <p className="ml-2">info@fitaesthetics.com</p>
            </div>

            <div className="my-4">
                <p>INSERT LOG HERE </p>       
            </div>    
            </div>
        
             <div className="col-6 col-md">
             <h5>FitAesthetics</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Careers</a></li>
                    <li><a className="text-muted" href="#">Contact Us</a></li>
                    <li><a className="text-muted" href="#">Help</a></li>
                    <li><a className="text-muted" href="#">Blog</a></li>
                 </ul>
            </div>

            <div className="col-6 col-md">
            <h5>About</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Our Team</a></li>
                    <li><a className="text-muted" href="#">Locations</a></li>
                    <li><a className="text-muted" href="#">Privacy</a></li>
                    <li><a className="text-muted" href="#">Terms</a></li>
                </ul>
            </div> 

        </div>

        </footer>

            <hr />
            <small className="d-block mb-3 text-muted my-3 text-center">&copy; FitAesthetics inc. All rights reserved</small>
      </div>
      </div>
    );
  }
}
