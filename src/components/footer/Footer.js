import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='mainFooter'>
            <div className='left'>
              <img src={require('../../Photo/mainlogo.png')} alt='' />
              <p>Contact the library:</p>
              <h6>nlk@nlk.gov.kw</h6>
              <p>Call us:</p>
              <h6>22929827</h6>
            </div>
            <div className='center'>
              <div>
                <h5>About</h5>
                <ul>
                  <li>
                    <Link to='/'>About KNL</Link>
                  </li>
                  <li>
                    <Link to='/'>Our Services</Link>
                  </li>
                  <li>
                    <Link to='/'>Library Halls</Link>
                  </li>
                  <li>
                    <Link to='/'>Releases</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Useful Links</h5>
                <ul>
                  <li>
                    <Link to='/'>Event Calendar</Link>
                  </li>
                  <li>
                    <Link to='/'>Advanced Search</Link>
                  </li>
                  <li>
                    <Link to='/'>Gallery</Link>
                  </li>
                  <li>
                    <Link to='/'>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='right'>
              <div>
                <img src={require('../../Photo/logo3.png')} alt='' />
                <img src={require('../../Photo/logo2.png')} alt='' />
              </div>
              <div className='links'>
                <div className='item'>
                  <Link to='/'>
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </div>
                <div className='item'>
                  <Link to='/'>
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
                <div className='item'>
                  <Link to='/'>
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                </div>
                <div className='item'>
                  <Link to='/'>
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lang'>
        <div className='container'>
          <div className='mainLang'>
            <p>Copyright © 2024,  Kuwait National Library. KNL. All Rights Reserved.</p>
            <select>
              <option value={'En'} selected>English</option>
              <option value={'Ar'}>Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
