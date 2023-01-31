import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/global/Header.js';
import Footer from './components/global/Footer.js';
import NotFound from './pages/NotFound.js';
import HomePage from './pages/Home.js';
import Staff from './pages/OurTeam';


//<Route path='/server/:server_uuid' element={<ServerListingPage/>}/>

function App() {
  return (
    <BrowserRouter>

      <Header/>

      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/ourteam' element={<Staff/>}/>

          <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
