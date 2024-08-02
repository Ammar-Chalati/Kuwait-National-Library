import React, { useState } from 'react'
import './about.css'
import { Link } from 'react-router-dom'

export default function About() {

  const [num, setNum] = useState(0)

  const background = [{
    'id' : 1,
    "url" : require('../../Photo/background2.jpg')
  },{
    'id' : 2,
    "url" : require('../../Photo/background1.jpg')
  },{
    'id' : 3,
    "url" : require('../../Photo/background3.jpg')
  },{
    'id' : 4,
    "url" : require('../../Photo/background4.jpg')
  }];

  const bg = background[num]

  function decrease() {
    if (num !== 0)
    setNum(num - 1)
  }
  function increase() {
    if (num !== background.length -1)
    setNum(num + 1)
  }

  return (
    <div className='about'>
      <div className='container'>
        <div className='mainAbout'>
          <div className='left'>
            <h1>Kuwait</h1>
            <h1>National</h1>
            <h1>Library</h1>
            <p>Preserving the history of Kuwait, illuminating its present, and safeguarding national memory.</p>
            <div>
              <Link to='/'>Our Secvices</Link>
              <Link to='/'>Contact Us {'>'}</Link>
            </div>
          </div>
          <div className='right'>
            <img src={bg.url} alt='' />
            <div className='description'>
              <div className='number'>
                <h3>0{bg.id}</h3><p>/ 0{background.length}</p>
              </div>
              <div className='arrow'>
                <i className="fa-solid fa-arrow-left-long"
                onClick={decrease}
                style={((num === 0)&&{color:'var(--secondaryDark)'})||{color:'var(--primaryDark)',cursor:'pointer'}}
                ></i>
                <i className="fa-solid fa-arrow-right-long"
                onClick={increase}
                style={((num === background.length -1)&&{color:'var(--secondaryDark)'})||{color:'var(--primaryDark)',cursor:'pointer'}}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
