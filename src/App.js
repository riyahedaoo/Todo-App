import React, { Component } from 'react';
import WhiteBox from "./Components/whitebox";
import bg from "./Components/Assets/Images/bg.png";
import "./Components/Assets/style.css";

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div style={{height:"100vh", width:"100vw"}}>
        <img src={bg} className="bg" alt="" />
        <WhiteBox />
      </div>
     );
  }
}
 
export default App;
