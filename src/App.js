import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Plugins } from '@capacitor/core';
const { Device, Modals } = Plugins;

class App extends Component {
    constructor(props) {
        super(props);
        this.showDeviceInfo = this.showDeviceInfo.bind(this);
    }

    async showDeviceInfo() {
        let info = await Device.getInfo();
        await Modals.alert({
            title: 'Info',
            message: `UUID: ${info.uuid} \n Model: ${info.model}`
        });
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <button onClick={this.showDeviceInfo}> Show Device Info</button>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        );
      }
}
 
export default App;