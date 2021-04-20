import React, { useState } from 'react';
import Header from './Header';
import ScheduleControl from './ScheduleControl';
import ProduceControl from './ProduceControl';
import Calendar from './Calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Header />
      <Calendar onChange={() => setDate()} value={date}/>
      <ScheduleControl />
      <ProduceControl />
    </>
  );
}

export default App;
