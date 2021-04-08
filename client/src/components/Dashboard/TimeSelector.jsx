import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const TimeSelector = ({ time, setTime, startDate, startTime }) => {
  // For start time, minTime should be current time if selected date (startDate) is today; and 1200AM if selected date is not current date
  // For end time, minTime should always be startTime
  const currentDate = new Date();

  console.log(startDate.getDate() === currentDate.getDate())
  console.log('start', startDate, 'current', currentDate)

  if (startTime) {
    let minTime = startTime;
  }
  else if (startDate.getDate() === currentDate.getDate()) {
    let minTime = new Date();

  } else {
    // reset time to 00:00 AM
    let minTime = new Date();
    minTime.setHours(0, 0);
  }


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
        minTime={minTime}
        maxTime={currentDate.setHours(23, 55)}
      />
    </div>
  );
};

export default TimeSelector;
