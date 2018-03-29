import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomeFooter } from 'src/features/home';

describe('home/HomeFooter', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <HomeFooter />
    );

    expect(
      renderedComponent.find('.home-home-footer').getElement()
    ).to.exist;
  });
});
