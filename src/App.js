import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Author name="Vincent" />
      </div>
    );
  }
}

class Author extends React.Component {

  alerte() { alert(this.props.name) }

  render() {
    return (
      <div>
        <button onClick={this.alerte.bind(this)}>PUSH IT !</button>
      </div>
    );
  }
}

export default App;
