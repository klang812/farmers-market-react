import React from "react";
import ProduceList from './ProduceList';

class ProduceControl extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    month: null
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
  if (this.state.month) {
    currentlyVisibleState = <ProduceList />
    buttonText = "Back";
  } else {
    buttonText = "Show Produce List";
  }

  return(
    <>
    {currentlyVisibleState}
    <button onClick={this.handleClick}>{buttonText}</button>
    </>
  );
}
}

export default ProduceControl;