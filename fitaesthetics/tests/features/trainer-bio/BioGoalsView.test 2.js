import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BioGoalsView } from 'src/features/trainer-bio/BioGoalsView';

describe('trainer-bio/BioGoalsView', () => {
  it('renders node with correct class name', () => {
    const props = {
      trainerBio: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BioGoalsView {...props} />
    );

    expect(
      renderedComponent.find('.trainer-bio-bio-goals-view').getElement()
    ).to.exist;
  });
});
