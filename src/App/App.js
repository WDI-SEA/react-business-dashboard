import React, { Component } from 'react';
import MainNav from '../MainNav';
import EmployeeSalaries from '../EmployeeSalaries';
import Expenses from '../Expenses';
import Profit from '../Profit';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: {
        show: true,
        component: <Expenses />
      },
      profit: {
        show: true,
        component: <Profit />
      },
      salaries: {
        show: true,
        component: <EmployeeSalaries />
      }
    };
  }

  toggle(graph) {
    let newState = this.state;
    newState[graph].show = !newState[graph].show;
    this.setState(newState);
  }

  render() {
    let graphs = Object.keys(this.state)
                  .map(key => this.state[key])
                  .filter(graph => graph.show)
                  .map((graph, idx) => {
                    return (
                      <div className="App-graph" key={idx}>
                        {graph.component}
                      </div>
                    );
                  });

    return (
      <div className="App">
        <MainNav />
        <div className="App-toggle">
          <h2>Toggle</h2>
          <input checked={this.state.expenses.show} type="checkbox" name="graphToggle" onChange={() => this.toggle('expenses')} />Expenses
          <input checked={this.state.salaries.show} type="checkbox" name="graphToggle" onChange={() => this.toggle('salaries')} />Salaries
          <input checked={this.state.profit.show} type="checkbox" name="graphToggle" onChange={() => this.toggle('profit')} />Profit
        </div>

        <div className="App-content">
          {graphs}
        </div>
      </div>
    );
  }
}

export default App;
