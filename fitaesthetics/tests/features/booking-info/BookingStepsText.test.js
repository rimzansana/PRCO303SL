import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BookingStepsText } from 'src/features/booking-info/BookingStepsText';

describe('booking-info/BookingStepsText', () => {
  it('renders node with correct class name', () => {
    const props = {
      bookingInfo: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BookingStepsText {...props} />
    );

    expect(
      renderedComponent.find('.booking-info-booking-steps-text').getElement()
    ).to.exist;
  });
});
