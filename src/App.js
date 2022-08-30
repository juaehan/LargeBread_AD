import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Reset} from 'styled-reset';
import SignUp from './components/SignUp';
import Admin from './page/Admin';
import Login from './page/Login';

const App = memo(() => {
  return (
    <div>
      <Reset />
      <Routes>
        <Route path="/" element={<Login />} exact={true} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      
    </div>
  );
});

export default App;