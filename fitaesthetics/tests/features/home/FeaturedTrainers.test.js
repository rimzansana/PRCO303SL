import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FeaturedTrainers } from 'src/features/home/FeaturedTrainers';

describe('home/FeaturedTrainers', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <FeaturedTrainers {...props} />
    );

    expect(
      renderedComponent.find('.home-featured-trainers').getElement()
    ).to.exist;
  });
});
