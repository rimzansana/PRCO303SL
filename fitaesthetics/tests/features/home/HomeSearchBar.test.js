import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomeSearchBar } from 'src/features/home/HomeSearchBar';

describe('home/HomeSearchBar', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomeSearchBar {...props} />
    );

    expect(
      renderedComponent.find('.home-home-search-bar').getElement()
    ).to.exist;
  });
});
