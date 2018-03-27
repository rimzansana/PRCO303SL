import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomeReviewsSlider } from 'src/features/home/HomeReviewsSlider';

describe('home/HomeReviewsSlider', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomeReviewsSlider {...props} />
    );

    expect(
      renderedComponent.find('.home-home-reviews-slider').getElement()
    ).to.exist;
  });
});
