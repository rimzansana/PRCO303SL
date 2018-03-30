import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SearchResultCardsMain } from 'src/features/search/SearchResultCardsMain';

describe('search/SearchResultCardsMain', () => {
  it('renders node with correct class name', () => {
    const props = {
      search: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SearchResultCardsMain {...props} />
    );

    expect(
      renderedComponent.find('.search-search-result-cards-main').getElement()
    ).to.exist;
  });
});
