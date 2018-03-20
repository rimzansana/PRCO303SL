import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Main } from 'src/features/trainer-signup/Main';

describe('trainer-signup/Main', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerSignup: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Main {...props} />
    );

    expect(
      renderedComponent.find('.trainer-signup-main').getElement()
    ).to.exist;
  });
});
