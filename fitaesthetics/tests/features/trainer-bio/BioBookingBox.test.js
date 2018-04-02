import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BioBookingBox } from 'src/features/trainer-bio/BioBookingBox';

describe('trainer-bio/BioBookingBox', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerBio: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BioBookingBox {...props} />
    );

    expect(
      renderedComponent.find('.trainer-bio-bio-booking-box').getElement()
    ).to.exist;
  });
});
