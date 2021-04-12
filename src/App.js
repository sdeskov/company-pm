import React, { Component } from 'react';

import './App.css';
import TreeContainer from "./containers/TreeContainer";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <TreeContainer />
      </div>
    )
  }
}

export default App
