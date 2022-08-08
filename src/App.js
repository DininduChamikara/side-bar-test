import React, { useState } from 'react';
import './App.css';
import LoginForm from "./components/LoginForm/LoginForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ClientView from './pages/ClientView/ClientView';
import Payments from './pages/Payments/Payments';
import PromoterView from './pages/PromoterView/PromoterView';

function App() {

  const [logged, setLogged] = useState(true);

  return (
    <>
      {
        logged ?

          <Router>
            <Navbar>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mainmenu/client-view' element={<ClientView />} />
                <Route path='/mainmenu/client-view/create_campaign_1' element={null} />

                <Route path='/mainmenu/promoter-view' element={<PromoterView />} />
                <Route path='/mainmenu/payments' element={<Payments />} />
              </Routes>
            </Navbar>
          </Router>
          :
          <Router>
            <Routes>
              <Route path='/' element={<LoginForm />} />
              <Route path='/signup' element={<SignUpForm />} />
            </Routes>
          </Router>

      }
    </>
  );
}

export default App;
