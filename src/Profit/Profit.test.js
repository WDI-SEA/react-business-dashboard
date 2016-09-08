import React from 'react';
import ReactDOM from 'react-dom';
import Profit from './Profit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Profit />, div);
});
