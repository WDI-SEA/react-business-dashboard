import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeSalaries from './EmployeeSalaries';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployeeSalaries />, div);
});
