import React from 'react'
import logo from '../images/logo.svg';
import admin from '../images/admin.svg'
import search from '../images/search.svg'
import cart from '../images/cart.svg'
import love from '../images/love.svg'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
        <img className='logo' src={logo} alt="logo"/>

        <div className='links'>
            <div className='navLinks'>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/pages'>Pages</Link>
            </div>

            <div className='adminLinks'>
                <div className='login'>
                    <img className='admin-img' src={admin} alt="admin logo" />
                    <Link className='login-link' to='#'>Login/Register</Link>
                </div>
                <div><img src={search} alt="search logo" /></div>
                <div><img src={cart} alt="cart logo" /></div>
                <div><img src={love} alt="fav logo" /></div>
                
            </div>
        </div>
    </nav>
  )
}

export default Header;