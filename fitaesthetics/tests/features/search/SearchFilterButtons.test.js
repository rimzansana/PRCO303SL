import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SearchFilterButtons } from 'src/features/search/SearchFilterButtons';

describe('search/SearchFilterButtons', () => {
  it('renders node with correct class name', () => {
    const props = {
      search: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SearchFilterButtons {...props} />
    );

    expect(
      renderedComponent.find('.search-search-filter-buttons').getElement()
    ).to.exist;
  });
});
