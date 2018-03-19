import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SignUp } from 'src/features/home/SignUp';

describe('home/SignUp', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SignUp {...props} />
    );

    expect(
      renderedComponent.find('.home-sign-up').getElement()
    ).to.exist;
  });
});
