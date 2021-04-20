import React from "react";
import styled from 'styled-components';
import Button from './defaults/Button';
import ProduceList from './ProduceList';
import Schedule from './Schedule';
import Calendar from './Calendar';


class ProduceControl extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    month: null,
    day: null
  };
}

handleClick = () => {
  this.setState(prevState => ({
    month: !prevState.month
  }));
}

render() {
  let currentlyVisibleState = null;
  let buttonText = null;
  // if (this.state.day) {
  //   this.state.day = new Intl.DateTimeFormat('en-US', {weekday: 'long'}.format(Calendar.MyApp()))
  // }
  if (this.state.month) {
    currentlyVisibleState = <ProduceList />
    buttonText = "Back";
  } else {
    buttonText = "Produce List";
  }

  return(
    <>
    <button onClick={this.handleClick}>{buttonText}</button>
    {currentlyVisibleState}
    </>
  );
}
}

export default ProduceControl;