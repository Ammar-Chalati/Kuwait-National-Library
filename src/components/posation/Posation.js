import React from 'react'
import './posation.css'

export default function Posation() {
  return (
    <div className='posation'>
      <div className='container'>
        <div className='mainPos'>
          <div>
            <i className="fa-regular fa-clock"></i>
            <div className='title'>
              <h4>8:00AM - 9:00PM</h4>
              <p>Opening hours</p>
            </div>
          </div>
          <div>
            <i className="fa-regular fa-map"></i>
            <div className='title'>
              <p>Al Qibla - Arabian Gulf Street</p>
              <p>Next to the Kuwait National Museum</p>
            </div>
          </div>
          <div>
            <i className="fa-solid fa-cloud-sun"></i>
            <div className='title'>
              {/* I didn't find any free api for weather */}
              <h4>18°C</h4>
              <p>Kuwait City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
