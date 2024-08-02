import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <div className='navBar'>
        <div className='container'>
          <div className='nav'>
            <div className='logo'>
              <img src={require('../../Photo/mainlogo.png')} alt='' />
            </div>
            <div className='search'>
              <div>
                <label htmlFor='searchThe'>Search The</label>
                <select name='searchThe' id='searchThe'>
                  <option value={'Catalog'} >Catalog</option>
                  <option value={'Catalog'} >Catalog</option>
                  <option value={'Catalog'} >Catalog</option>
                </select>
              </div>
              <div>
                <label htmlFor='by'>By</label>
                <select name='by' id='by'>
                  <option value={'Keyword'} >Keyword</option>
                  <option value={'Keyword'} >Keyword</option>
                  <option value={'Keyword'} >Keyword</option>
                </select>
              </div>
              <div>
                <input type='search' placeholder="Let's Find What Your Looking For.."></input>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='menu'>
        <div className='container'>
          <div className='mainMenu'>
            <div className='left'>
              <ul>
                <li>
                  <Link to='/'>About The Library</Link>
                </li>
                <li>
                  <Link to='/'>Library Halls</Link>
                </li>
                <li>
                  <Link to='/'>Services</Link>
                </li>
                <li>
                  <Link to='/'>Gallery</Link>
                </li>
                <li>
                  <Link to='/'>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className='right'>
              <Link to='/'>
                <i className="fa-regular fa-calendar-days"></i>
                <p>Events Calender</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
