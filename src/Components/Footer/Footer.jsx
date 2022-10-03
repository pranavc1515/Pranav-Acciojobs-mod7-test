import React from 'react'
import './Footer.scss'
import Acciojob from '../images/Acciojob.svg'
import fb from '../images/fb.svg';
import insta from '../images/insta.svg';
import twitter from '../images/twitter.svg';
import Data from '../Data/Data';

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className="upper-footer">
            
            <div className='social-icons'>
                <img src={Acciojob} alt="" />

                <div className='right-side-icons'>
                    <img src={fb} alt="" />
                    <img src={insta} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
        </div>

        <hr></hr>
{/* ------------------------------------------------------- */}

        <div className="main-footer">
            <div>
                <ul>
                    <h5 className='footer-title'>Company Info</h5>
                    <ul><a className='link'  href="# ">About Us</a></ul>
                    <ul><a className='link'  href="# ">Carrier</a></ul>
                    <ul><a className='link'  href="# ">We are hiring</a></ul>
                    <ul><a className='link'  href="# ">Blog</a></ul>
                    
                </ul>
            </div>

            <div>
                <ul>
                    <h5 className='footer-title'>Legal</h5>
                    <ul><a className='link'  href="# ">About Us</a></ul>
                    <ul><a className='link'  href="# ">Carrier</a></ul>
                    <ul><a className='link'  href="# ">We are hiring</a></ul>
                    <ul><a className='link'  href="# ">Blog</a></ul>
                    
                </ul>
            </div>

            <div>
                <ul>
                    <h5 className='footer-title'>Features</h5>
                    <ul><a className='link'  href="# ">Business Marketing</a></ul>
                    <ul><a className='link'  href="# ">User Analytic</a></ul>
                    <ul><a className='link'  href="# ">Live Chat</a></ul>
                    <ul><a className='link'  href="# ">Unlimited Support</a></ul>
                    
                </ul>
            </div>

            <div>
                <ul>
                    <h5 className='footer-title'>Resources</h5>
                    <ul><a className='link' href="# ">IOS & Android</a></ul>
                    <ul><a className='link' href="# ">Watch a Demo</a></ul>
                    <ul><a className='link' href="# ">Customers</a></ul>
                    <ul><a className='link' href="# ">API</a></ul>
                    
                </ul>
            </div>
            


            <Data />

        </div>
        

    </div>
    <div className="end-footer">
            <h4>Made With ❤️ By pranav at AccioJobs</h4>
        </div>
    </>
  )
}

export default Footer;