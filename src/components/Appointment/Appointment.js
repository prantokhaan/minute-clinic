import React from 'react';
import vidImg from '../../images/Video call-pana.svg';

const Appointment = () => {
  return (
    <div className="text-center mt-5">
      <h3 className="color-2">Your Doctor will call you within 10 Minutes. Thanks for waiting</h3>
      <img src={vidImg} alt="" width="500px" height="500px" />
    </div>
  );
};

export default Appointment;