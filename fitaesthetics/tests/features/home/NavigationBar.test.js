import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { NavigationBar } from 'src/features/home/NavigationBar';

describe('home/NavigationBar', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <NavigationBar {...props} />
    );

    expect(
      renderedComponent.find('.home-navigation-bar').getElement()
    ).to.exist;
  });
});
