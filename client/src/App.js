import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Reset} from 'styled-reset';
import SignUp from './components/SignUp';
import Login from './page/Login';
import Admin from './page/Admin';


const App = memo(() => {
  return (
    <div>
      <Reset />
      <Routes>
        {/* <Route path="/" element={<Login />} exact={true} />
        <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/*" element={<Admin />} exact={true}/>
      </Routes>
      
    </div>
  );
});

export default App;