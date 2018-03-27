import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomeLoginModal } from 'src/features/home/HomeLoginModal';

describe('home/HomeLoginModal', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomeLoginModal {...props} />
    );

    expect(
      renderedComponent.find('.home-home-login-modal').getElement()
    ).to.exist;
  });
});
