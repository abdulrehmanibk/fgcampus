import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  return (
    <div className="why-choose-container">
      <div className="why-choose-content">

        <div className="image-section">
          <img src="/images/rb_12803.png" alt=""/>
        </div>


        <div className="text-section">
          <h2>Why F.G.Campus</h2>
          {/* <h2>Why Choose Us</h2> */}
          <p className="description">
            School choice theory assumes that parents are rational actors that
            can gather and consume information to find a school that matches
            their child's needs. Parents' desires and ability to choose quality
            schools.
          </p>
          <ul className="benefits-list">
            <li>Promotes Quranic understanding.</li>
            <li>Combines faith with tech.</li>
            <li>Encourages spiritual growth.</li>
            <li>Supports lifelong learning.</li>
            <li>Connects tradition to modernity.</li>
            <li>Offers diverse IT skills.</li>
            <li>Bridges faith and career.</li>
            <li>Enhances community knowledge.</li>
            <li>Simplifies online education.</li>
            <li>Empowers ethical professionals.</li>
          </ul>
          <button className="button2">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
