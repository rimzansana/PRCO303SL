import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SearchResultText } from 'src/features/search/SearchResultText';

describe('search/SearchResultText', () => {
  it('renders node with correct class name', () => {
    const props = {
      search: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SearchResultText {...props} />
    );

    expect(
      renderedComponent.find('.search-search-result-text').getElement()
    ).to.exist;
  });
});
