import React from "react";
import ProduceList from './ProduceList';

class ProduceControl extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    month: null
  };
}

// monthSwitch = (params) => {
//   switch (params) {
//     case params == 'January':
//       return this.state.month[0];
//       break;
//     case params == 'February':
//       return this.state.month[1];
//       break;
//     case params == 'March':
//       return this.state.month[2];
//       break;
//     case params == 'April':
//       return this.state.month[3];
//       break;
//     case params == 'May':
//       return this.state.month[4];
//       break;
//     case params == 'June':
//       return this.state.month[5];
//       break;
//     case params == 'July':
//       return this.state.month[6];
//       break;
//     case params == 'August':
//       return this.state.month[7];
//       break;
//     case params == 'September':
//       return this.state.month[8];
//       break;
//     case params == 'October':
//       return this.state.month[9];
//       break;
//     case params == 'November':
//       return this.state.month[10];
//       break;
//     case params == 'December':
//       return this.state.month[11];
//       break;
//     default:
//       return null;
//   }
// }

render() {
  let currentlyVisibleState = null;
  if (this.state.month) {
    currentlyVisibleState = <ProduceList />
  }


  return(
    <>
    {currentlyVisibleState}
    {/* {this.monthSwitch(params)} */}
    </>
  );
}
}

export default ProduceControl;