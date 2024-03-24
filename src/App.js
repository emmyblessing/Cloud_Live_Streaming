import { Route, Routes } from 'react-router-dom';
import Nav from "./pages/Nav";
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <>
      <Nav />
      <div >
        <Routes>        
          <Route path="/"  element={<Home />} />
          <Route path="/about"  element={<About />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
