import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { TrainerInputForm } from 'src/features/trainer-signup/TrainerInputForm';

describe('trainer-signup/TrainerInputForm', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerSignup: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <TrainerInputForm {...props} />
    );

    expect(
      renderedComponent.find('.trainer-signup-trainer-input-form').getElement()
    ).to.exist;
  });
});
