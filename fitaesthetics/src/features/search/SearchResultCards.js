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
            <div class="card-body d-flex flex-column align-items-start">
              <h3 class="mb-0">
                <a class="text-dark">Lazar Angelov</a>
              </h3>
              <div class="text-muted">Body building , Calisthenics and cardio</div>
              <p class="card-text mb-auto my-3">Hi, my name is Lazar Angelov. My passion for fitness is what led me to become a personal trainer.</p>
              <p class="card-text mb-auto my-3 d-flex">Experience :<p> &nbsp; 5 Years</p></p>
              <p class="card-text mb-auto d-flex">15000<p> &nbsp;LKR per month</p></p>

              <a href="#">View Profile</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block h-100" src="/src/images/card-profile.jpg" alt="Card image cap" width="160" />
            
          </div>
        </div>
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-success">Design</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="#">Post title</a>
              </h3>
              <div class="mb-1 text-muted">Nov 11</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#">Continue reading</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap" />
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
