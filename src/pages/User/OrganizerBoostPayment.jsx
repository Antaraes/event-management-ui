import React from 'react';
import { useLocation } from 'react-router-dom';

const OrganizerBoostPayment = () => {
  const location = useLocation();
  const selectedEvent = location.state.selectedEvent;

  return (
    <>
      <br />
      <br />
      <br />
      <div>OrganizerBoostPayment</div>
      {/* Use selectedEvent as needed */}
      <div>
        Name: {selectedEvent?.name}
        <br />
        Start Date: {selectedEvent?.startDate}
        <br />
        End Date: {selectedEvent?.endDate}
        <br />
        Location: {selectedEvent?.location}
      </div>
    </>
  );
};

export default OrganizerBoostPayment;
