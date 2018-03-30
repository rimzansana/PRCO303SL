import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class SearchResultCards extends Component {
  static propTypes = {
    search: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="search-search-result-cards">
            <div class="container">

         <div class="row mb-2">

         

            <div class="col-md-6">
       
               <div class="card flex-md-row mb-4 box-shadow h-md-250">
               <img class="card-img-right flex-auto d-none d-md-block h-100" src="/src/images/card-profile.jpg" alt="Card image cap" width="160" />
               <div class="card-body d-flex flex-column align-items-start">

                <h3 class="mb-0">
                <a class="text-dark">Lazar Angelov</a>
                </h3>

              <div class="text-muted">Body building , Calisthenics and cardio</div>

              <p class=" my-4 d-flex">Experience :<p> &nbsp; 5 Years</p></p>
              <p class=" mb-auto d-flex">15000<p> &nbsp;LKR per month</p></p>

                
                <div class="w-100">

                <div class="row">
                  <div class="col w-50">
                  <a href="#" id="view-link">View Profile</a>
                  </div>

                  <div class="col d-flex justify-content-end">
                  *****
                  </div>

                  </div>
                  </div>
               
              </div>

            
            
            </div>
          </div>
      
           <div class="col-md-6">
       
               <div class="card flex-md-row mb-4 box-shadow h-md-250">
               <img class="card-img-right flex-auto d-none d-md-block h-100" src="/src/images/card-profile.jpg" alt="Card image cap" width="160" />
               <div class="card-body d-flex flex-column align-items-start">

                <h3 class="mb-0">
                <a class="text-dark">Lazar Angelov</a>
                </h3>

              <div class="text-muted">Body building , Calisthenics and cardio</div>

              <p class=" my-4 d-flex">Experience :<p> &nbsp; 5 Years</p></p>
              <p class=" mb-auto d-flex">15000<p> &nbsp;LKR per month</p></p>

                
                <div class="w-100">

                <div class="row">
                  <div class="col w-50">
                  <a href="#" id="view-link">View Profile</a>
                  </div>

                  <div class="col d-flex justify-content-end">
                  *****
                  </div>

                  </div>
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
    search: state.search,
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
)(SearchResultCards);