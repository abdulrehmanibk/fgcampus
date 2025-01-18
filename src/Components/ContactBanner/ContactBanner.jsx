import React from 'react'
import './ContactBanner.css';
import { Link } from 'react-router-dom';


const ContactBanner = () => {
  return (
    <>
    <section className="contact">
        <h2>Let’s Learn Together</h2>
        <p>Join us to Learn something extraordinary. Book a free trial lesson with one of our expert teachers today</p>
        <Link className="button1" to={'/register'} style={{textDecoration:'none'}}>Schedule Free Trial</Link>
    </section>  
    </>
  )
}

export default ContactBanner;