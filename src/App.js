import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

import Dashboard from './Pages/Dashboard/Dashboard';
import SignIn from './Pages/SignIn/Signin';
import SignUp from './Pages/SignUp/SignUp';
import Contact from './Pages/ContactUs/Contact';
import { Toaster } from 'react-hot-toast';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn ={setIsLoggedIn}/>
       <Toaster position="top-right" reverseOrder={false} />

       <div className="content">
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignIn  setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path='/contact' element ={<Contact/>}/>
        </Routes>
       </div>
    </div>
  );
}

export default App;
