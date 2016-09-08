import React, { Component } from 'react';
import MainNav from '../MainNav';
import Expenses from '../Expenses';
import GraphToggle from '../GraphToggle';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.state = {
      expenses: true
    };
  }

  toggle(graph) {
    let newState = this.state;
    newState[graph] = !newState[graph];
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <MainNav />
        <GraphToggle
          data={this.state}
          changeHandler={this.toggle.bind(this)} />

        <div>
          <Expenses display={this.state.expenses} />
        </div>
      </div>
    );
  }
}

export default App;
