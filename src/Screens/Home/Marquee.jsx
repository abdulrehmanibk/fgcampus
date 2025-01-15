import './Marquee.css';

import React from 'react'

const Marquee = () => {
  return (
    <section className="section">
    {/* <h3>Diving Deep into Courses</h3> */}
        <div className="wrapper">
            <div className="itemLeft" style={{"--i": 1}}><p>Noorani Qaida</p> </div>
            <div className="itemLeft" style={{"--i": 2}}><p>Tajweed</p> </div>
            <div className="itemLeft" style={{"--i": 3}}><p>Quran Memorization</p> </div>
            <div className="itemLeft" style={{"--i": 4}}><p>Tafseer</p> </div>
            <div className="itemLeft" style={{"--i": 5}}><p>Arabic Language</p></div>
            <div className="itemLeft" style={{"--i": 6}}><p>Islamic Studies</p> </div>
            <div className="itemLeft" style={{"--i": 7}}><p>Taleem ul Islam</p> </div>
            <div className="itemLeft" style={{"--i": 8}}><p>Quran Translation</p> </div>
        </div>         
        <div className="wrapper">
            <div className="itemRight" style={{"--i": 1}}><p>Noorani Qaida</p></div>
            <div className="itemRight" style={{"--i": 2}}><p>Tajweed</p></div>
            <div className="itemRight" style={{"--i": 3}}><p>Quran Memorization</p></div>
            <div className="itemRight" style={{"--i": 4}}><p>Tafseer</p></div>
            <div className="itemRight" style={{"--i": 5}}><p>Arabic Language</p></div>
            <div className="itemRight" style={{"--i": 6}}><p>Islamic Studies</p></div>
            <div className="itemRight" style={{"--i": 7}}><p>Taleem ul Islam</p></div>
            <div className="itemRight" style={{"--i": 8}}><p>Quran Translation</p></div>
        </div>        

</section>
  )
}

export default Marquee;