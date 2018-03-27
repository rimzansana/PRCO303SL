import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomeResetPasswordModal } from 'src/features/home/HomeResetPasswordModal';

describe('home/HomeResetPasswordModal', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomeResetPasswordModal {...props} />
    );

    expect(
      renderedComponent.find('.home-home-reset-password-modal').getElement()
    ).to.exist;
  });
});
