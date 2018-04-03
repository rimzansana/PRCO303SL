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
    <div className="container">

    <div className="row mb-2">

        <div className="col-md-6">

            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <img className="card-img-right flex-auto d-none d-md-block h-100" src="/src/images/card-profile.jpg" alt="Card image cap" width="160" />
                <div className="card-body d-flex flex-column align-items-start">

                    <h3 className="mb-0">
                    <a className="text-dark">Lazar Angelov</a>
                    </h3>

                 <div className="text-muted">Body building , Calisthenics and cardio</div>

                <div className="container">
                    <div className=" row my-3">
                    <p> Experience : </p>
                    <p> &nbsp; 5 Years</p>
                    </div>

                    <div className=" row mb-auto">
                    <p>15000</p>
                    <p> &nbsp;LKR per month</p>                  
                    </div>
                </div>
                
                <div className="w-100">

                    <div className="row">
                        <div className="col w-50">
                        <a href="#" id="view-link">View Profile</a>
                        </div>

                        <div className="col d-flex justify-content-end">
                        *****
                        </div>

                    </div>
                </div>
               
                </div>

            </div>

        </div>
      
        <div className="col-md-6">

            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <img className="card-img-right flex-auto d-none d-md-block h-100" src="/src/images/card-profile.jpg" alt="Card image cap" width="160" />
                <div className="card-body d-flex flex-column align-items-start">

                    <h3 className="mb-0">
                    <a className="text-dark">Lazar Angelov</a>
                    </h3>

                 <div className="text-muted">Body building , Calisthenics and cardio</div>

                <div className="container">
                    <div className=" row my-3">
                    <p> Experience : </p>
                    <p> &nbsp; 5 Years</p>
                    </div>

                    <div className=" row mb-auto">
                    <p>15000</p>
                    <p> &nbsp;LKR per month</p>                  
                    </div>
                </div>
                
                <div className="w-100">

                    <div className="row">
                        <div className="col w-50">
                        <a href="#" id="view-link">View Profile</a>
                        </div>

                        <div className="col d-flex justify-content-end">
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
