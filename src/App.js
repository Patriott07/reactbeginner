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
import HelloWorld from './pages/HelloWorld';
import IfStatement from './pages/IFStatement';
import Looping from './pages/Looping';
import ProtectedRoute from './utls/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* sesi 1 */}
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />


        {/* sesi 2 */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />


        {/* sesi 3 */}
        <Route path='/helloworld' element={<HelloWorld />} />
        <Route path='/ifstatement' element={<IfStatement />} />
        <Route path='/looping' element={<Looping />} />

        {/* Route ini akan di cek dlu oleh satpam kita */}
        <Route element={<ProtectedRoute />}>
          <Route path={'/dashboard'} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
