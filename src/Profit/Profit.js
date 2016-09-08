import React, { Component } from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';
import netProfitData from '../../data/netProfit.json';

class Profit extends Component {
  render() {
    console.log(netProfitData[0]);
    let formattedProfitData = netProfitData.map(datum => {
      return {
        x: new Date(datum.date),
        y: datum.netProfit
      };
    });

    return (
      <div>
        <h2>September Net Profit</h2>
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

export default Profit;
