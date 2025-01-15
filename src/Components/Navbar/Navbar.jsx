import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="logo">

        </div>
        <div className="navlinks">
            {/* <div className="iconClose">close</div> */}
            <ul className='links'>
                <li className='link'>
                   <NavLink to={'/'} className={"NavLinks"}>Home</NavLink> 
                </li>
                <li className='link'>
                    Teachers
                    <ul className='sublinks'>
                        <li> <NavLink to="/courses/1" className={"NavLinks"}>dolorsit</NavLink></li>
                        <li> <NavLink to="/courses/2" className={"NavLinks"}>dolorsit</NavLink></li>
                        <li> <NavLink to="/courses/3" className={"NavLinks"}>dolorsit</NavLink></li>
                        <li> <NavLink to="/courses/4" className={"NavLinks"}>dolorsit</NavLink></li>
                    </ul>
                    </li>
                <li className='link'>
                <NavLink to={'/'} className={"NavLinks"}>About</NavLink>
                </li>

                <li className='link'>
                    Courses
                    <ul className='sublinks'>
                        <li> <NavLink to="/courses/1" className={"NavLinks"}>dolorsit</NavLink></li>
                        <li> <NavLink to="/courses/2" className={"NavLinks"}>dolorsit</NavLink></li>
                        <li> <NavLink to="/courses/3" className={"NavLinks"}>dolorsit</NavLink></li>
                        <li> <NavLink to="/courses/4" className={"NavLinks"}>dolorsit</NavLink></li>
                    </ul>
                </li>
                <li className='link'>
                   <NavLink to={'/register'} className={"NavLinks"}>Register Now</NavLink> 
                </li>
                <li className='link'>
                   <NavLink to={'/'} className={"NavLinks"}>Pricing</NavLink> 
                </li>
                {/* <li className='link'>
                   <NavLink to={'/'} className={"NavLinks"}>Contact Us</NavLink> 
                </li> */}
            </ul>
        </div>
        <div className="btn_nav">
        <NavLink to={'/register'} className={"NavLinks"}><button className='button2'>Get A Free Trial</button></NavLink> 
        </div>
        <div className="detail-summary">
        <details>
            <summary>
            <NavLink to={'/'} className={"NavLinks"}>Home</NavLink> 
            </summary>
        </details>
        <details>
            <summary>Teachers</summary>
            <p>Courses</p>
        </details>
        <details>
            <summary>About</summary>
        </details>
        <details>
            <summary>Courses</summary>
            <ul className='details-sublinks'>
                <NavLink to="/courses/1" className={"NavLinks"}><li> dolorsit </li></NavLink>
                <NavLink to="/courses/2" className={"NavLinks"}><li> dolorsit </li></NavLink>
                <NavLink to="/courses/3" className={"NavLinks"}><li> dolorsit </li></NavLink>
                <NavLink to="/courses/4" className={"NavLinks"}><li> dolorsit </li></NavLink>
            </ul>
        </details>
        <details>
            <summary>Pricing</summary>
        </details>
        <details>
            <summary>Register Now</summary>
        </details>
        <details>
            <summary>Contact Us</summary>
        </details>
        </div>
        {/* <div className="iconOpen">open</div> */}
    </nav>
    </>
  )
}

export default Navbar;