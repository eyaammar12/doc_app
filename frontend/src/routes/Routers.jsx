
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Docters from '../pages/Docters/Docters';
import DocterDetails from '../pages/Docters/DocterDetails';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import CheckoutSuccess from '../pages/CheckoutSuccess';

import { Routes,Route } from "react-router-dom";








const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/doctors' element={<Docters/>}></Route>
      <Route path='/doctors/:id' element={<DocterDetails/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/users/profile/me' element={<MyAccount/>}></Route>
      <Route path='/doctors/profile/me' element={<Dashboard/>}></Route>
      <Route path='/checkout-success' element={<CheckoutSuccess/>}></Route>
    </Routes>
  );
};

export default Routers