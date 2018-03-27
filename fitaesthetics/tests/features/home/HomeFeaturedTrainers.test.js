import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomeFeaturedTrainers } from 'src/features/home/HomeFeaturedTrainers';

describe('home/HomeFeaturedTrainers', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomeFeaturedTrainers {...props} />
    );

    expect(
      renderedComponent.find('.home-home-featured-trainers').getElement()
    ).to.exist;
  });
});
