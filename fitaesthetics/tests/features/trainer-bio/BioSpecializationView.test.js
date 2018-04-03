import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BioSpecializationView } from 'src/features/trainer-bio/BioSpecializationView';

describe('trainer-bio/BioSpecializationView', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerBio: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BioSpecializationView {...props} />
    );

    expect(
      renderedComponent.find('.trainer-bio-bio-specialization-view').getElement()
    ).to.exist;
  });
});
