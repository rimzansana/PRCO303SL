import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SearchBar } from 'src/features/home/SearchBar';

describe('home/SearchBar', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SearchBar {...props} />
    );

    expect(
      renderedComponent.find('.home-search-bar').getElement()
    ).to.exist;
  });
});
