import React from 'react';
import ReactDOM from 'react-dom';
import GraphToggle from './GraphToggle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const data = {
    salaries: true
  }
  ReactDOM.render(<GraphToggle data={data} />, div);
});
