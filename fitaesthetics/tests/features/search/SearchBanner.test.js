import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SearchBanner } from 'src/features/search';

describe('search/SearchBanner', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <SearchBanner />
    );

    expect(
      renderedComponent.find('.search-search-banner').getElement()
    ).to.exist;
  });
});
