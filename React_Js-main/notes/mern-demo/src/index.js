import React from 'react';
import {render} from 'react-dom';
import './index.css';
import StudentApp from './StudentApp';

import {BrowserRouter} from 'react-router-dom';

render(
  <BrowserRouter>
    <StudentApp />
  </BrowserRouter>,
  document.querySelector('#root')
)