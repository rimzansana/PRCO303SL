import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SearchResultCards } from 'src/features/search/SearchResultCards';

describe('search/SearchResultCards', () => {
  it('renders node with correct class name', () => {
    const props = {
      search: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SearchResultCards {...props} />
    );

    expect(
      renderedComponent.find('.search-search-result-cards').getElement()
    ).to.exist;
  });
});
