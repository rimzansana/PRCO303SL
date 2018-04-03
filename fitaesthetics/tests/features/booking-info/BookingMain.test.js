import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BookingMain } from 'src/features/booking-info/BookingMain';

describe('booking-info/BookingMain', () => {
  it('renders node with correct class name', () => {
    const props = {
      bookingInfo: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BookingMain {...props} />
    );

    expect(
      renderedComponent.find('.booking-info-booking-main').getElement()
    ).to.exist;
  });
});
