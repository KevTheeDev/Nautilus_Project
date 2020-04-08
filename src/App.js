import React from 'react';
import './App.css';
import NautiWireframe from './assets/NautiWireframe.png';

class Nautilus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        <div>
          <div>
          <img id="imgpage"
          src={NautiWireframe} 
          className="App-tablet" 
          alt="tablet"  />
          </div>

        </div>

     );
  }
}
 
export default Nautilus;
