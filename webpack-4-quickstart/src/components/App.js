import React, { Component } from 'react';
import '../css/introComponent.css'
import '../scss/introComponent2.scss'

class App extends Component {

  render() {
    return ([
        <div key={0} className="intro-component">
          <h1>My React App!!</h1>
        </div>,
        <div key={1} className="intro-component2">
          <h1>My React App!!</h1>
        </div>
      ]
    );
  }
}

export default App;