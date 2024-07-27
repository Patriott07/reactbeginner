import logo from './logo.svg';
import './App.css';

// import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Browser router >> supaya Browser kita mengenali route path yang kita definisikan
// Routes >> fungsinya buat mengelompokan Route
// Route >> berfungsi sebagai routing pada aplikasi react kita. 

// path itu sebagai arah url kita

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Contact />} />


        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
