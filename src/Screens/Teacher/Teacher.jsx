import React from 'react'
import './Teacher.css';
import Banner from '../../Components/Banner'
import Stats from '../../Components/Stats/Stats'
import BarFeatures from '../../Components/BarFeatures/BarFeatures';
import WhyUs from '../../Components/WhyUs/WhyUs';
import ContactBanner from '../../Components/ContactBanner/ContactBanner';

const Teacher = () => {
  return (
    <>
    <Banner 
      imgs={'/images/homeback1.jpg'}
      heading={'Expert Quran Teachers'}
      para={'Connect with experienced educators dedicated to providing personalized Islamic education in a modern learning environment.'}

    />

    <Stats />


    <div className="teachers_container">
      <div className="teachers_heading">
        <h2>Meet Our Teachers</h2>
      </div>
      <div className="teachers_card_container">
        <div className="teacher_card">
          <h4>Ustadh Ahmad</h4>
          <p>Expert in Tajweed and Tafseer</p>
          <ul>
            <li><i class="fa-solid fa-graduation-cap"></i>Tajweed & Quranic Sciences</li>
            <li><i class="fa-solid fa-clock"></i>Morning & Evening</li>
            <li><i class="fa-solid fa-certificate"></i>10+ years</li>
          </ul>
          <BarFeatures 
              b1={'English'}
              b2={'Arabic'}
              b3={'Urdu'}
              styles={{
                padding : ".5rem 1rem",
                color : 'var(--c3)',
                textShadow: "none",
                backgroundColor :'var(--c1)',
                fontSize : '.9rem'
              }}
          />
        </div>        
        <div className="teacher_card">
          <h4>Ustadh Ahmad</h4>
          <p>Expert in Tajweed and Tafseer</p>
          <ul>
            <li><i class="fa-solid fa-graduation-cap"></i>Tajweed & Quranic Sciences</li>
            <li><i class="fa-solid fa-clock"></i>Morning & Evening</li>
            <li><i class="fa-solid fa-certificate"></i>10+ years</li>
          </ul>
          <BarFeatures 
              b1={'English'}
              b2={'Arabic'}
              b3={'Urdu'}
              styles={{
                padding : ".5rem 1rem",
                color : 'var(--c3)',
                textShadow: "none",
                backgroundColor :'var(--c1)',
                fontSize : '.9rem'
              }}
          />
        </div>        
        <div className="teacher_card">
          <h4>Ustadh Ahmad</h4>
          <p>Expert in Tajweed and Tafseer</p>
          <ul>
            <li><i class="fa-solid fa-graduation-cap"></i>Tajweed & Quranic Sciences</li>
            <li><i class="fa-solid fa-clock"></i>Morning & Evening</li>
            <li><i class="fa-solid fa-certificate"></i>10+ years</li>
          </ul>
          <BarFeatures 
              b1={'English'}
              b2={'Arabic'}
              b3={'Urdu'}
              styles={{
                padding : ".5rem 1rem",
                color : 'var(--c3)',
                textShadow: "none",
                backgroundColor :'var(--c1)',
                fontSize : '.9rem'
              }}
          />
        </div>
      </div>
    </div>

    <WhyUs />
    <ContactBanner />

    </>
  )
}

export default Teacher