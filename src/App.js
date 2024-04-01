import { Route, Routes } from 'react-router-dom';
import Nav from "./pages/Nav";
import Home from './pages/Home';
import About from './pages/About';
import Verify from './pages/Verify';
import Signup from './pages/Signup';
import CreatePassword from './pages/CreatePassword';
import Login from './pages/Login';



function App() {
  return (
    <>
      <Nav />
      <div >
        <Routes>        
          <Route path="/"  element={<Home />} />
          <Route path="/about"  element={<About />}/>
          <Route path="/signup"  element={<Signup />}/>
          <Route path="/verify"  element={<Verify />}/>
          <Route path="/createPassword"  element={<CreatePassword />}/>
          <Route path="/login"  element={<Login />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
