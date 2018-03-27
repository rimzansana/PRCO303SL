import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { TrainerMain } from 'src/features/trainer-signup/TrainerMain';

describe('trainer-signup/TrainerMain', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerSignup: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <TrainerMain {...props} />
    );

    expect(
      renderedComponent.find('.trainer-signup-trainer-main').getElement()
    ).to.exist;
  });
});
