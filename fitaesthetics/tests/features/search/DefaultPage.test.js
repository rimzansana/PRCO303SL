import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/search/DefaultPage';

describe('search/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      search: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.search-default-page').getElement()
    ).to.exist;
  });
});
