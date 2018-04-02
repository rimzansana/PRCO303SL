import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BioBody } from 'src/features/trainer-bio/BioBody';

describe('trainer-bio/BioBody', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerBio: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BioBody {...props} />
    );

    expect(
      renderedComponent.find('.trainer-bio-bio-body').getElement()
    ).to.exist;
  });
});
