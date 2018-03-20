import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { TrainerBanner } from 'src/features/trainer-signup/TrainerBanner';

describe('trainer-signup/TrainerBanner', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerSignup: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <TrainerBanner {...props} />
    );

    expect(
      renderedComponent.find('.trainer-signup-trainer-banner').getElement()
    ).to.exist;
  });
});
