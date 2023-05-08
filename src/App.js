import './App.css';
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Hospitals from './Pages/Hospitals';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
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
      </Routes>
    </Router>
  );
}

export default App;
