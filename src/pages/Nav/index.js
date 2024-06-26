import React from 'react'
import NavbarPage from '../../components/Navbar';
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  //Array of paths where Navbar should be hidden 
  const hiddenPaths = [
    '/signup', 
    '/verify', 
    '/createPassword', 
    '/login',
    '/welcome',
    '/userSpec',
    '/verifyNumber',
    '/plan',
    '/payment',
    '/setup',
    '/system',
    '/livestream',
    '/support',
    '/notification',
    '/account',
    '/upgrade',
    '/editInfo',
    '/planEdit',
    '/paymentEdit',
    '/paymentDetailsEdit',
  ]

  // Check if the current path is in hiddenPaths
  const isHidden = hiddenPaths.includes(location.pathname)
  
  // If the current path is in hiddenPaths, hide the navbar
  if (isHidden) {
    return null
  }

  return (
    <div>
      <NavbarPage />
    </div>
  )
}

export default Nav;
