import React from 'react';
import styled from 'styled-components';
import Button from './defaults/Button';
import ProduceControl from './ProduceControl';
import ScheduleControl from './ScheduleControl';

const Navbar = styled.div`
  padding: 5px 10px;
  height: 45px;
  background-color: rgb(73, 172, 112);
`
const StyledButton = styled(Button)`
  padding: 13px;
  margin-right: 5px;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
    transition: .2s;
  }
`

function Header(){
  return (
    <Navbar>
      <StyledButton text={"Avery's Organics"} />
      <StyledButton text={"Produce List"} onClick={() => ProduceControl.handleClick}/>
      <StyledButton text={"Schedule"} onClick={() => ScheduleControl.scheduleHandleClick}/>
    </Navbar>
  );
}

export default Header;