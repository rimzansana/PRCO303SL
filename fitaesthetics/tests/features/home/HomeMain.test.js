import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomeMain } from 'src/features/home/HomeMain';

describe('home/HomeMain', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomeMain {...pageProps} />
    );

    expect(
      renderedComponent.find('.home-home-main').getElement()
    ).to.exist;
  });
});
