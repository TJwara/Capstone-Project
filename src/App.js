import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar.js';

import Landing_Page from './Components/Landing_Page/Landing_Page.js';

import Sign_Up from './Components/Sign_Up/Sign_Up.js';

import Login from './Components/Login/Login.js';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page/>}/>
              </Routes>

              
            
        </BrowserRouter>

        <Sign_Up/>

        <Login/>
       
    </div>
  );
}

export default App;