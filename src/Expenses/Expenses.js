import React, { Component } from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';
import expenseData from '../../data/expenses.json';

class Expenses extends Component {
  render() {
    let formattedProfitData = expenseData.map(datum => {
      let expenseValues = Object.keys(datum.expenses)
                          .map(key => datum.expenses[key]);

      return {
        x: new Date(datum.date),
        y: expenseValues.reduce((total, next) => total + next)
      };
    });

    return (
      <div>
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
