import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';


export default function Calendar({onChange, value}) {

  return (
    <ReactCalendar
      onChange={onChange}
      value={value}
    />
  );
}