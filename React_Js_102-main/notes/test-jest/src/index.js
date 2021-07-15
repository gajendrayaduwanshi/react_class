import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Link from './App';
import reportWebVitals from './reportWebVitals';
import { getByTestId } from '@testing-library/react';

ReactDOM.render(
  <React.StrictMode>
    <Link page='test.html' children='test.html'/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
