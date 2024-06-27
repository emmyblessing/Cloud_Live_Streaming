//import React, { useState } from "react";
//import { Route, Routes } from 'react-router-dom';
import Nav from "./pages/Nav";
/* import Home from './pages/Home';
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
import LiveStream from './pages/LiveStream';
import StreamView from './pages/StreamView';
import UserCompleted from './components/UserCompleted';
import UserSpecEdit from './pages/UserSpecEdit';
import ChangeSaved from './components/ChangeSaved';
import PlanEdit from './pages/PlanEdit';
import PaymentEdit from './pages/PaymentEdit';
import PaymentSuccessful from './components/PaymentSuccessful';
import PaymentDetailsEdit from './pages/PaymentDetailsEdit';
import PaymentReservation from './pages/PaymentReservation';
import FootageSuccess from './components/FootageSuccess';
import RestoreCompleted from './components/RestoreCompleted';
import BackupCompleted from './components/BackupCompleted';
import Support from './pages/Support';
import Notification from './components/Notification';
import Specifications from './components/Specifications'; */
import AppRoutes from './routes/route'; 
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <div >
        <Nav />
        <AppRoutes />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
