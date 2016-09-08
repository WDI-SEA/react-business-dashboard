import React, { Component } from 'react';
import MainNav from '../MainNav';
import EmployeeSalaries from '../EmployeeSalaries';
import Expenses from '../Expenses';
import Profit from '../Profit';
import GraphToggle from '../GraphToggle';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.state = {
      expenses: true,
      profit: true,
      salaries: true
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
          <Profit display={this.state.profit} />
          <EmployeeSalaries display={this.state.salaries} />
        </div>
      </div>
    );
  }
}

export default App;
