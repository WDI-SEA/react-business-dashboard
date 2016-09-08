import React from 'react';
import ReactDOM from 'react-dom';
import Expenses from './Expenses';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Expenses />, div);
});
