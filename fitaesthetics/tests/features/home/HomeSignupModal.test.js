import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomeSignupModal } from 'src/features/home/HomeSignupModal';

describe('home/HomeSignupModal', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomeSignupModal {...props} />
    );

    expect(
      renderedComponent.find('.home-home-signup-modal').getElement()
    ).to.exist;
  });
});
