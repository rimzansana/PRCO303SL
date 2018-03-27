import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomeNavigationBar } from 'src/features/home/HomeNavigationBar';

describe('home/HomeNavigationBar', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomeNavigationBar {...props} />
    );

    expect(
      renderedComponent.find('.home-home-navigation-bar').getElement()
    ).to.exist;
  });
});
