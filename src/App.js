import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ClientView from './pages/ClientView/ClientView';
import PromoterVIew from './pages/PromoterVIew/PromoterVIew';
import Payments from './pages/Payments/Payments';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}

        <Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/client-view' element={<ClientView />} />
            <Route path='/promoter-view' element={<PromoterVIew />} />
            <Route path='/payments' element={<Payments />} />
          </Routes>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
