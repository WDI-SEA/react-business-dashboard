import React, { Component } from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';
import expenseData from '../../data/expenses.json';
import './Expenses.css';

class Expenses extends Component {
  render() {
    if (!this.props.display) return null;

    let formattedProfitData = expenseData.map(datum => {
      return {
        x: new Date(datum.date),
        y: datum.expenses.reduce((total, next) => total + next)
      };
    });

    return (
      <div className="Expenses">
        <h2>September Expenses</h2>
        <VictoryChart height={500} width={500}>
          <VictoryAxis
            label="Day"
            tickValues={[
              new Date(2016, 8, 1),
              new Date(2016, 8, 15),
              new Date(2016, 8, 30),
            ]}
            tickFormat={(x) => x.getDate()}/>
          <VictoryLine data={formattedProfitData}/>
        </VictoryChart>
      </div>
    );
  }
}

export default Expenses;
