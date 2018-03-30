import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SearchPageNavigator } from 'src/features/search/SearchPageNavigator';

describe('search/SearchPageNavigator', () => {
  it('renders node with correct class name', () => {
    const props = {
      search: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SearchPageNavigator {...props} />
    );

    expect(
      renderedComponent.find('.search-search-page-navigator').getElement()
    ).to.exist;
  });
});
