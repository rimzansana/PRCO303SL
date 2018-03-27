import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ReviewModal } from 'src/features/home';

describe('home/ReviewModal', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <ReviewModal />
    );

    expect(
      renderedComponent.find('.home-review-modal').getElement()
    ).to.exist;
  });
});
