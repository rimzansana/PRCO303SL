import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomeFeatured } from 'src/features/home/HomeFeatured';

describe('home/HomeFeatured', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomeFeatured {...props} />
    );

    expect(
      renderedComponent.find('.home-home-featured').getElement()
    ).to.exist;
  });
});
