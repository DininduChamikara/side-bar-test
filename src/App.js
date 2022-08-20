import React, { useState } from 'react';
import './App.css';
import LoginForm from "./components/LoginForm/LoginForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ClientView from './pages/ClientView/ClientView';
import Payments from './pages/Payments/Payments';
import PromoterView from './pages/PromoterView/PromoterView';
import CreateCampaignsFormFirst from './components/CreateCampaigns/CreateCampaignFormFirst/CreateCampaignsFormFirst';
import AdvertisementDetailsInputForm from './components/AdvertisementDetailsInputForm/AdvertisementDetailsInputForm';
import PromotersListView from './components/PromotersListView/PromotersListView';
import SelectPaymentView from './components/SelectPaymentView/SelectPaymentView';

function App() {

  const [logged, setLogged] = useState(true);
  const [clientViewNum, setClientViewNum] = useState(0);

  const formReturn = (clientViewNum) => {
    if (clientViewNum == 0) {
      return <ClientView setClientViewNum={setClientViewNum} />
    } else if (clientViewNum == 1) {
      return <CreateCampaignsFormFirst setClientViewNum={setClientViewNum} />
    } else if (clientViewNum == 2) {
      return <AdvertisementDetailsInputForm setClientViewNum={setClientViewNum} />
    } else if (clientViewNum == 3) {
      return <PromotersListView setClientViewNum={setClientViewNum} />
    } else if (clientViewNum == 4) {
      return <SelectPaymentView setClientViewNum={setClientViewNum} />
    }
  }

  return (
    <>
      {
        logged ?

          <Router>
            <Navbar>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mainmenu/client-view' element={formReturn(clientViewNum)} />
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
