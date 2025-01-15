import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <>
        <footer className="footer">
        {/* <hr></hr> */}
        <div className="footer_content">
        <div className="footer_intro">
            <img src="/images/fgc.jpeg" alt="" />
        </div>
        <div className="footer_services">
            <ul>
                <li>Regular Courses</li>
                <li>Noorani Qaida</li>
                <li>Quran with Tajweed</li> 
                <li>Quran Memorization</li>
                <li>Tafseer e Quran</li> 
                <li>Arabic Language</li>
                <li>Islamic Studies</li>
                <li>Taleem ul Islam</li>
                <li>Quran Translation</li>
                <li>Online Ijazah Course</li>
                <li>Learn Ten Qirat Online</li>
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