import './App.css';
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Hospitals from './Pages/Hospitals';
import Services from './Pages/Services';
import Reviews from './Pages/Reviews';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Hospital from './Pages/Hospital';
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
</style>

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/hospitals' element={<Hospitals />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/reviews' element={<Reviews />} />
        <Route exact path='/hospital' element={<Hospital />} />
      </Routes>
    </Router>
  );
}

export default App;
