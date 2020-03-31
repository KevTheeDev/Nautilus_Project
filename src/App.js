import React from 'react';
import logo from './logo.svg';
import hp_prime from './assets/hp_prime.jpg';
import './App.css';

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
          src={hp_prime} 
          className="App-tablet" 
          alt="tablet"  />
          </div>

        </div>

     );
  }
}
 
export default Nautilus;
