import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../UserContext';
import './Header.css'

const Header = () => {
    return (
       <header className='header'>
           <div className="container">
               <div className="navbar">
                   <div className="logo-box">
                       <h2>Budget Foods</h2>
                   </div>
                   <div className="navbar_nav">
                       <Link className='nav_link' to='/'>Home</Link>
                       <Link className='nav_link' to='/orders'>Orders</Link>
                       <Link className='nav_link' to='/admins'>Admins</Link>
                       <Link className='nav_link' to='/shipment'>Deals</Link>
                       <Link className='btn-success' to='/login'>Login</Link>
                   </div>
               </div>
           </div>
       </header>
    );
};

export default Header;