import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ReviewsSlider } from 'src/features/home/ReviewsSlider';

describe('home/ReviewsSlider', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ReviewsSlider {...props} />
    );

    expect(
      renderedComponent.find('.home-reviews-slider').getElement()
    ).to.exist;
  });
});
