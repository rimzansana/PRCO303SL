import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BookingBanner } from 'src/features/booking-info/BookingBanner';

describe('booking-info/BookingBanner', () => {
  it('renders node with correct class name', () => {
    const props = {
      bookingInfo: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BookingBanner {...props} />
    );

    expect(
      renderedComponent.find('.booking-info-booking-banner').getElement()
    ).to.exist;
  });
});
