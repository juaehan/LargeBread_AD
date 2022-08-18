import React, { memo } from 'react';
import {Reset} from 'styled-reset';
import Login from './page/Login';

const App = memo(() => {
  return (
    <div>
      <Reset />
      <Login />
    </div>
  );
});

export default App;