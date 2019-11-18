import React, {PureComponent} from 'react';
import logo from './Images/blueStack.png';
import './App.css'; 
import AppTable from './components/AppTable'

const customStyles = {
  content : {
    top                   : '20%',
    left                  : '35%',
    right                 : '35%',
    bottom                : '20%',
    overflow : true
  }
};

 // Required field to use your custom Tab


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Header-content">
          <img src={logo} className="App-logo" alt="logo" />
        </p>
      </header>
      <div className="manage-comp">
        <p className="manage-text">
          Manage Compaigns
        </p>
        <AppTable/>
      </div>
    </div>
  );
}

export default App;
