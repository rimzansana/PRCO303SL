import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BioReviewsView } from 'src/features/trainer-bio/BioReviewsView';

describe('trainer-bio/BioReviewsView', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerBio: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BioReviewsView {...props} />
    );

    expect(
      renderedComponent.find('.trainer-bio-bio-reviews-view').getElement()
    ).to.exist;
  });
});
