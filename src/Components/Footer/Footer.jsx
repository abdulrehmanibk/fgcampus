import React from 'react'
import './Footer.css';
import { CourseData } from '../../Screens/Courses/CoursesData';
import { NavLink } from 'react-router-dom';
import features from '../../Screens/AdditionalLinks/additionalLinksData';

const Footer = () => {

  return (
    <>
        <footer className="footer">
        {/* <hr></hr> */}
        <div className="footer_content">
        <div className="footer_intro">
            {/* <img src="/images/fgc.jpeg" alt="" /> */}
            <h1>F.G.Campus</h1>
        </div>
        <div className="footer_services">
            <ul>
                <li>Regular Courses</li>
                {CourseData.map((item, index) => (
                <li key={index}><NavLink to={`/courses/${item.id}`} style={{textDecoration:'none', color:'var(--c3)'}}>{item.title}</NavLink></li>
                ))}
            </ul>
        </div>
        <div className="footer_services">
            <ul>
                <li>Short Courses</li>
                    <li>Memorization of Selected Surahs</li>
                    <li> Daily Supplication Online</li>
                    <li>Pillars of Islam</li>
                    <li>Fiqh (Islamic Jurisprudence)</li>
                    <li>Seerah (Life of Muhammad)</li>
                    <li>Islamic beliefs aqeedah</li>
                    <li>History of Islam</li>
                    <li>Ramadan Special Courses</li>
                    <li>The Companions of Muhammad</li>
                    <li>Stories of the Prophets</li>
            </ul>
        </div>
                
        <div className="footer_services">
            <ul>
                <li>Short Courses</li>
                {features.map((item, index) => (
                    <li key={index}>
                        <NavLink to={`/additionallinks/${item.id}`} style={{textDecoration:'none', color:'var(--c3)'}}>
                        {item.heading}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        <div className="footer_copywrite">
            <hr></hr>
            <p>Copyright @ 2024 All Right Reserved</p>
        </div>

    </footer>
    </>
  )
}

export default Footer;