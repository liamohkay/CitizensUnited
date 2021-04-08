import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const TimeSelector = ({ time, setTime }) => {
  return (
    <div>
      <DatePicker
        selected={time}
        onChange={date => setTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={5}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    </div>
  );
};

export default TimeSelector;
