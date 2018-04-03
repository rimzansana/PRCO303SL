import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BioProfilePicture } from 'src/features/trainer-bio/BioProfilePicture';

describe('trainer-bio/BioProfilePicture', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerBio: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BioProfilePicture {...props} />
    );

    expect(
      renderedComponent.find('.trainer-bio-bio-profile-picture').getElement()
    ).to.exist;
  });
});
