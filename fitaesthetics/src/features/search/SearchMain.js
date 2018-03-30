import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Navbar from 'src/features/home/HomeNavigationBar.js';
import SearchBanner from 'src/features/search/SearchBanner.js';
import ResultText from 'src/features/search/SearchResultText.js';
import FilterButton from 'src/features/search/SearchFilterButtons.js';
import ResultCardMain from 'src/features/search/SearchResultCardsMain.js';
import PageNavigator from 'src/features/search/SearchPageNavigator.js';
import Footer from 'src/features/home/HomeFooter.js';

export class SearchMain extends Component {
  static propTypes = {
    search: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="search-search-main">

      <Navbar />
      <SearchBanner />
      <ResultText />
      <FilterButton />
      <ResultCardMain />
      <PageNavigator />
      <Footer />
      





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
)(SearchMain);
