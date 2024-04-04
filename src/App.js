//import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Nav from "./pages/Nav";
import Home from './pages/Home';
import About from './pages/About';
import Verify from './pages/Verify';
import Signup from './pages/Signup';
import CreatePassword from './pages/CreatePassword';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import UserSpec from './pages/UserSpec';
import VerifyNumber from './pages/VerifyNumber';
import Plan from './pages/Plan';
import Payment from "./pages/Payment";
import Setup from './pages/Setup';
import SystemSetup from './pages/SystemSetup';
import PaymentDetails from './pages/PaymentDetails';
import SetupCompleted from './pages/SetupCompleted';


function App() {
  //const [showNav, setShowNav] = useState(true);

  return (
    <>
      <div >
      {/* { showNav &&
        <nav>
          <Nav />
        </nav>
      }  */}
        <Nav />
        <Routes>        
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/verify" element={<Verify />}/>
          <Route path="/createPassword" element={<CreatePassword />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/welcome" element={<Welcome />}/>
          <Route path="/userSpec" element={<UserSpec />}/>
          <Route path="/verifyNumber" element={<VerifyNumber />}/>
          <Route path="/plan" element={<Plan />}/>
          <Route path="/payment" element={<Payment />}/>
          <Route path="/setup" element={<Setup />}/>
          <Route path="/system" element={<SystemSetup />}/>
          <Route path="/paymentDetails" element={<PaymentDetails />}/>
          <Route path="/paymentSuccessful" element={<SetupCompleted />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
