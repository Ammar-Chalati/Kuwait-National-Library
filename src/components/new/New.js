import React, { useState } from 'react'
import './new.css'

export default function New() {

  const[indexE, setIndexE] = useState(0);
  const[indexN, setIndexN] = useState(0);
  const[indexS, setIndexS] = useState(0);

  const all = [
    {
      'type': `STAFF LISTS`,
      "url" : require('../../Photo/stuff1.png'),
      'text': `Dr. Al-Ansari opens the exhibition of documents and pictures, documents and books about horses`,
      'note': `Check out this month's recommendations from Kuwait National Library. Visit our Books page for previous lists of recommendations.`,
    },
    {
      'type': `EVENT`,
      'url' : require('../../Photo/event1.png'),
      'text': `The Opening of Al Qurian festival at Kuwait national library`,
      'note': `Jun 8th | 12:00pm - 2:00pm`,
    },
    {
      'type': `NEWS`,
      "url" : require('../../Photo/news1.jpg'),
      'text': `The Full ceremony of Dr. Taghreed Al Qudsi's book  'To a Safe Life'`,
      'note': ``,
    },
  ];

  const event = all.filter((ele) => {
    return ele.type === "EVENT"
  });
  const news = all.filter((ele) => {
    return ele.type === "NEWS"
  });
  const stuff = all.filter((ele) => {
    return ele.type === "STAFF LISTS"
  });

  let randomE = event[indexE % event.length];
  let randomNextE = event[(indexE +1) % event.length];
  let randomN = news[indexN % news.length];
  let randomNextN = news[(indexN +1) % news.length];
  let randomS = stuff[indexS % stuff.length];
  let randomNextS = stuff[(indexS +1) % stuff.length];

  setInterval(() => {
    setIndexE(indexE + 1);
    setIndexN(indexN + 1);
    setIndexS(indexS + 1);
  },10000);

  return (
    <div className='new'>
      <div className='container'>
        <div className='mainNew'>
          <h1>New At Kuwait National Library</h1>
          <div className='articles'>
            <div className='left'>
              <div>
                <img src={randomE.url} alt=''/>
                <h6>{randomE.type}</h6>
                <h5>{randomE.text}</h5>
                <p>{randomE.note}</p>
              </div>
              <div>
                <img src={randomN.url} alt=''/>
                <h6>{randomN.type}</h6>
                <h5>{randomN.text}</h5>
                <p>{randomN.note}</p>
              </div>
            </div>
            <div className='center'>
              <div>
                <img src={randomS.url} alt=''/>
                <h6>{randomS.type}</h6>
                <h5>{randomS.text}</h5>
                <p>{randomS.note}</p>
              </div>
            </div>
            <div className='right'>
              <div>
                <h5>{randomE.text}</h5>
                <img src={randomE.url} alt=''/>
              </div>
              <div>
                <h5>{randomN.text}</h5>
                <img src={randomN.url} alt=''/>
              </div>
              <div>
                <h5>{randomS.text}</h5>
                <img src={randomS.url} alt=''/>
              </div>
              <div>
                <h5>{randomNextE.text}</h5>
                <img src={randomNextE.url} alt=''/>
              </div>
              <div>
                <h5>{randomNextN.text}</h5>
                <img src={randomNextN.url} alt=''/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
