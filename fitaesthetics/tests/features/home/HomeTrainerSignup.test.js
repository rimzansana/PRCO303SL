import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomeTrainerSignup } from 'src/features/home/HomeTrainerSignup';

describe('home/HomeTrainerSignup', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomeTrainerSignup {...props} />
    );

    expect(
      renderedComponent.find('.home-home-trainer-signup').getElement()
    ).to.exist;
  });
});
