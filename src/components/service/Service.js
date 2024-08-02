import React, { useState } from 'react'
import './service.css'

export default function Service() {

  const [num, setNum] = useState(0)
  
  const items = [{
    'i' : <i class="fa-solid fa-book"></i>,
    'h6' : 'Reference and Information Research.',
    'p' : `Assists researchers in finding information using the library's automated catalog, providing access to a wide range of materials.`
  },{
    'i' : <i class="fa-solid fa-globe"></i>,
    'h6' : 'Database and Internet Research',
    'p' : `Allows researchers to search in subscribed databases and the internet for diverse, updated information sources.`
  },{
    'i' : <i class="fa-solid fa-medal"></i>,
    'h6' : 'Registration and Legal Deposit.',
    'p' : `Protects authors' rights through registration and legal deposit, issuing a deposit number for intellectual property protection.`
  },{
    'i' : <i class="fa-solid fa-book"></i>,
    'h6' : 'Reference and Information Research.',
    'p' : `Assists researchers in finding information using the library's automated catalog, providing access to a wide range of materials.`
  },{
    'i' : <i class="fa-solid fa-globe"></i>,
    'h6' : 'Database and Internet Research',
    'p' : `Allows researchers to search in subscribed databases and the internet for diverse, updated information sources.`
  },{
    'i' : <i class="fa-solid fa-medal"></i>,
    'h6' : 'Registration and Legal Deposit.',
    'p' : `Protects authors' rights through registration and legal deposit, issuing a deposit number for intellectual property protection.`
  }];

  const [posation,setPosation] = useState(100);
  const item = items.map((ele) => {
    return(
      <div className='item'>
        {ele.i}
        <h6>{ele.h6}</h6>
        <p>{ele.p}</p>
      </div>
    )
  })

  function decrease() {
    if (num !== 0){
      setPosation(posation + 200);
      setNum(num - 1);
    }
  }
  function increase() {
    if (num !== items.length -1){
      setPosation(posation - 200);
      setNum(num + 1);
    }
  }

  return (
    <div className='service'>
      <div className='container'>
        <div className='mainService'>
          <h3>How We Can Help You</h3>
          <div className='arrow'>
            <i className="fa-solid fa-arrow-left-long"
              onClick={decrease}
              style={((num === 0)&&{color:'var(--secondaryDark)'})||{color:'var(--primaryLight)',cursor:'pointer'}}
            ></i>
            <i className="fa-solid fa-arrow-right-long"
              onClick={increase}
              style={((num === items.length -1)&&{color:'var(--secondaryDark)'})||{color:'var(--primaryLight)',cursor:'pointer'}}
            ></i>
            <div className='serItems' style={{left:`${posation}px`}}>
              {item}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
