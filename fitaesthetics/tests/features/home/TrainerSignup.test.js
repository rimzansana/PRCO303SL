import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { TrainerSignup } from 'src/features/home/TrainerSignup';

describe('home/TrainerSignup', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <TrainerSignup {...props} />
    );

    expect(
      renderedComponent.find('.home-trainer-signup').getElement()
    ).to.exist;
  });
});
