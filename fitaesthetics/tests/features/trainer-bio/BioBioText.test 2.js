import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BioBioText } from 'src/features/trainer-bio/BioBioText';

describe('trainer-bio/BioBioText', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerBio: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BioBioText {...props} />
    );

    expect(
      renderedComponent.find('.trainer-bio-bio-bio-text').getElement()
    ).to.exist;
  });
});
