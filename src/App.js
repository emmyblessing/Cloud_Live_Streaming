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
import Specifications from './components/Specifications';


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
          <Route path="/editInfo" element={<UserSpecEdit />}/>
          <Route path="/verifyNumber" element={<VerifyNumber />}/>
          <Route path="/plan" element={<Plan />}/>
          <Route path="/planEdit" element={<PlanEdit />}/>
          <Route path="/payment" element={<Payment />}/>
          <Route path="/paymentReserve" element={<PaymentReservation />}/>
          <Route path="/paymentEdit" element={<PaymentEdit />}/>
          <Route path="/setup" element={<Setup />}/>
          <Route path="/system" element={<SystemSetup />}/>
          <Route path="/paymentDetails" element={<PaymentDetails />}/>
          <Route path="/paymentDetailsEdit" element={<PaymentDetailsEdit />}/>
          <Route path="/paymentSuccessful" element={<SetupCompleted />}/>
          <Route path="/livestream" element={<LiveStream />}/>
          <Route path="/streamView" element={<StreamView />}/>
          {/* <Route path="/historyDetails" element={<H />}/> */}
          <Route path="/userCompleted" element={<UserCompleted />}/>
          <Route path="/changeSaved" element={<ChangeSaved />}/>
          <Route path="/paymentSuccess" element={<PaymentSuccessful />}/>
          <Route path="/footageSuccess" element={<FootageSuccess />}/>
          <Route path="/restoreCompleted" element={<RestoreCompleted />}/>
          <Route path="/backupCompleted" element={<BackupCompleted />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="/notification" element={<Notification />}/>
          <Route path="/account" element={<Specifications />}/>
          <Route path="/upgrade" element={<Plan />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
