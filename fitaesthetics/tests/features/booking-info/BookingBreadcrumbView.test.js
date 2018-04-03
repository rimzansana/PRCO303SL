import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BookingBreadcrumbView } from 'src/features/booking-info/BookingBreadcrumbView';

describe('booking-info/BookingBreadcrumbView', () => {
  it('renders node with correct class name', () => {
    const props = {
      bookingInfo: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BookingBreadcrumbView {...props} />
    );

    expect(
      renderedComponent.find('.booking-info-booking-breadcrumb-view').getElement()
    ).to.exist;
  });
});
