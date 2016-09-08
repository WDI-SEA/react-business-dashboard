import React, { Component } from 'react';
import './GraphToggle.css';

class GraphToggle extends Component {
  render() {
    return (
      <div className="GraphToggle">
        <h2>Toggle</h2>
        <input
          checked={this.props.data.expenses}
          type="checkbox"
          name="graphToggle"
          onChange={() => this.props.changeHandler('expenses')} />
        <label>Expenses</label>
        <input
          checked={this.props.data.salaries}
          type="checkbox"
          name="graphToggle"
          onChange={() => this.props.changeHandler('salaries')} />
        <label>Salaries</label>
        <input
          checked={this.props.data.profit}
          type="checkbox"
          name="graphToggle"
          onChange={() => this.props.changeHandler('profit')} />
        <label>Profit</label>
      </div>
    );
  }
}

export default GraphToggle;
