import React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import {FaTiktok, FaFacebookF, FaInstagram} from 'react-icons/fa'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/css-wrappers/Footer'


const MobileFooter = () => {

  return (
    <>
    <Wrapper>
    <section className="mobile-footer">
        <div className="container">
            <div className="mobile-footer-grid">
                    <div className="footer-item">
                        <h3 className="text-md">More Information</h3>

                        <ul className="footer-links">
                             <Link to='/about'>About Us</Link>
                            <Link to='/'>Contact Us</Link>
                            <Link to='/'>Frequently Asked Questions</Link>
                        </ul>
                    </div>

                    <div className="footer-item">
                         <h3 className="text-md">Subscribe for Emails</h3>
                         <p className='subscribe-msg'>Subscribe to receive updates, access to exclusive deals, and more. Receive sales information through email.</p>
                         <div className="input-container">
                            <input type="text" placeholder='Enter your email address'/>
                             <Link to='/'><button><HiChevronRight/></button></Link>
                        </div>
                    </div>

                    <div className="footer-item">
                        <h3 className="text-md">Follow Us</h3>

                        <div className="social-icons">
                            <Link to='/'><span><FaFacebookF/></span></Link>
                            <Link to='/'><span><FaTiktok/></span></Link>  
                            <Link to='/'><span><FaInstagram/></span></Link>
                        </div>
                    </div>
                    
            
                <div className="footer-img-container">
                    <Link to='/'><img className='footer-logo' src={logo} alt='logo'/></Link>
                </div>
            </div>
        </div>
        
        </section>
    </Wrapper>
        
    </>
  )
}

export default MobileFooter