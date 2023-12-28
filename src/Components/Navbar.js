import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import {  toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn
  let setIsLoggedIn = props.setIsLoggedIn

  return (
    <div className='nav-bar'>
      <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" width={70} height={50} loading='lazy'/>
          </Link>
      </div>
      <div className="links">
        <ul className='options'>
         <li><Link to="/">Home</Link></li>
         <li><Link to="#">About</Link></li>
         <li><Link to="/contact">Contacts</Link></li>
        </ul>
      </div>
      <div className="btns">
          { !isLoggedIn &&
            <Link to="/signin">
              <button  className='btn' >
                Sign In
              </button>
            </Link>
          }
          { !isLoggedIn &&
            <Link to="/signup">
              <button className='btn' >
                Sign Up
              </button>
            </Link>
          }
          { isLoggedIn &&
            <Link to="/">
              <button className='btn' onClick={()=>{
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}>
                Log Out
              </button>
            </Link>
          }
          {
            isLoggedIn &&
            <Link to="/dashboard">
              <button className='btn'>
                Dashboard
              </button>
            </Link>
          }
         
      </div>
    </div>
  )
}

export default Navbar