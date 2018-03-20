import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SignUpForm } from 'src/features/trainer-signup/SignUpForm';

describe('trainer-signup/SignUpForm', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerSignup: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SignUpForm {...props} />
    );

    expect(
      renderedComponent.find('.trainer-signup-sign-up-form').getElement()
    ).to.exist;
  });
});
