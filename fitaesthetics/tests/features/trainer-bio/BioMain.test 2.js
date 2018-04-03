import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BioMain } from 'src/features/trainer-bio/BioMain';

describe('trainer-bio/BioMain', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerBio: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BioMain {...props} />
    );

    expect(
      renderedComponent.find('.trainer-bio-bio-main').getElement()
    ).to.exist;
  });
});
