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
      </div>
    );
  }
}

export default GraphToggle;
