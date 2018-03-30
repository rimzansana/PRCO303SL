import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SearchMain } from 'src/features/search/SearchMain';

describe('search/SearchMain', () => {
  it('renders node with correct class name', () => {
    const props = {
      search: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SearchMain {...props} />
    );

    expect(
      renderedComponent.find('.search-search-main').getElement()
    ).to.exist;
  });
});
