import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import salaryData from '../../data/employee-monthly-salaries.json';

class EmployeeSalaries extends Component {
  render() {
    return (
      <div>
        <h2>Monthly Employee Salaries</h2>
        <VictoryPie
          height={500}
          width={500}
          data={salaryData}
          x={data => `${data.name}\n${data.position}`}
          y={"salary"}
          colorScale={[
            "#D85F49",
            "#F66D3B",
            "#D92E1D",
            "#D73C4C",
            "#FFAF59",
            "#E28300",
            "#F6A57F"
          ]} />
      </div>
    );
  }
}

export default EmployeeSalaries;
