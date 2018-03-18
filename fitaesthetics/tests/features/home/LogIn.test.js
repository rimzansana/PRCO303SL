import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { LogIn } from 'src/features/home/LogIn';

describe('home/LogIn', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LogIn {...props} />
    );

    expect(
      renderedComponent.find('.home-log-in').getElement()
    ).to.exist;
  });
});
