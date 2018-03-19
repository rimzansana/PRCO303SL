import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ResetPassword } from 'src/features/home/ResetPassword';

describe('home/ResetPassword', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ResetPassword {...props} />
    );

    expect(
      renderedComponent.find('.home-reset-password').getElement()
    ).to.exist;
  });
});
