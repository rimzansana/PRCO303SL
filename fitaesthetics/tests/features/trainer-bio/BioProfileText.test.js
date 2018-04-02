import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BioProfileText } from 'src/features/trainer-bio/BioProfileText';

describe('trainer-bio/BioProfileText', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerBio: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BioProfileText {...props} />
    );

    expect(
      renderedComponent.find('.trainer-bio-bio-profile-text').getElement()
    ).to.exist;
  });
});
