import React from "react";
import styled from 'styled-components';
import Button from './defaults/Button';
import ScheduleList from './ScheduleList';
import Calendar from './Calendar';

class ScheduleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      day: null,
      location: null,
      hours: null,
      booth: null
    };
  }

  scheduleHandleClick = () => {
    this.setState(prevState => ({
      day: !prevState.day
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.day) {
      currentlyVisibleState = <ScheduleList />
      buttonText = "Back";
    } else {
      buttonText = "Schedule";
    }
    return(
      <>
      <button onClick={this.scheduleHandleClick}>{buttonText}</button>
      {currentlyVisibleState}
      </>
    );
  }
}

export default ScheduleControl;