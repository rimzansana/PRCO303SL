import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BookingGoalContainer } from 'src/features/booking-info/BookingGoalContainer';

describe('booking-info/BookingGoalContainer', () => {
  it('renders node with correct class name', () => {
    const props = {
      bookingInfo: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BookingGoalContainer {...props} />
    );

    expect(
      renderedComponent.find('.booking-info-booking-goal-container').getElement()
    ).to.exist;
  });
});
