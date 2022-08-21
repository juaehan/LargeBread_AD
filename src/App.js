import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Reset} from 'styled-reset';
import Login from './page/Login';

const App = memo(() => {
  return (
    <div>
      <Reset />
      <Routes>
        <Route path="/" element={<Login />} exact={true} />
        <Route path="/join" element={<Login />} exact={true} />
      </Routes>
      
    </div>
  );
});

export default App;