import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BioProfileHeader } from 'src/features/trainer-bio/BioProfileHeader';

describe('trainer-bio/BioProfileHeader', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerBio: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BioProfileHeader {...props} />
    );

    expect(
      renderedComponent.find('.trainer-bio-bio-profile-header').getElement()
    ).to.exist;
  });
});
