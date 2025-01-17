import React, { useState } from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

import {CourseData} from '../../Screens/Courses/CoursesData';

const Navbar = () => {

    const [isResponsiveNav, setIsResponsiveNav] = useState(false);
    const handleResponsiveNav = () => {
        setIsResponsiveNav(!isResponsiveNav)
        
    };  

  return (
    <>
      <nav>
        <div className="logo"></div>
        <div className="navlinks">
          <ul className="links">
            <li className="link">
              <NavLink to={"/"} className={"NavLinks"}>
                Home
              </NavLink>
            </li>
            <li className="link">
              Teachers
              <ul className="sublinks">
                <li>
                  {" "}
                  <NavLink to="/teachers/1" className={"NavLinks"}>
                    Male Teachers
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/teachers/2" className={"NavLinks"}>
                    Female Teachers
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="link">
              <NavLink to={"/about/fgcampus"} className={"NavLinks"}>
                About
              </NavLink>
            </li>

            <li className="link">
              Courses
              <ul className="sublinks">
              {CourseData.map((item, index) => (                
                <li key={index}>
                  <NavLink to={`/courses/${item.id}`} className={"NavLinks"}>
                  {item.title}
                  </NavLink>
                </li>
              ))}

              </ul>
            </li>
            <li className="link">
              <NavLink to={"/register"} className={"NavLinks"}>
                Register Now
              </NavLink>
            </li>
            <li className="link">
            <NavLink to={'/pricing'} className={"NavLinks"}>Pricing</NavLink>
            </li>
          </ul>
        </div>

        <div className="btn_nav">
          <NavLink to={"/register"} className={"NavLinks"}>
            <button className="button2">Get A Free Trial</button>
          </NavLink>
        </div>

        <div className="resp-nav-icon">
          <p onClick={handleResponsiveNav}>
            {!isResponsiveNav ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark"></i>}
          </p>
        </div>

        <div
          className="detail-summary"
          style={{ 
            display: isResponsiveNav ? "block" : "none",
            transform: isResponsiveNav ? "translateY(0%)" : "translateY(-10%)",
            transition: "0.3s", 
             }}
        >
          <details>
            <summary>
              <NavLink to={"/"} className={"NavLinks"}>
                Home
              </NavLink>
            </summary>
          </details>
          <details>
            <summary>Teachers</summary>
            <ul className="details-sublinks">
              <NavLink to="/teachers/1" className={"NavLinks"}>
                <li> Male Teachers </li>
              </NavLink>
              <Link to="/teachers/2" className={"NavLinks"}>
                <li> Female Teachers </li>
              </Link>
            </ul>
            </details>
          <details>
            <summary>              
              <NavLink to={"/about/fgcampus"} className={"NavLinks"}>
                About
              </NavLink></summary>
          </details>
          <details>
            <summary>Courses</summary>
            <ul className="details-sublinks">
              {CourseData.map((item, index) => (                
              <NavLink to={`/courses/${item.id}`} className={"NavLinks"} key={index}>
                <li >
                    {item.title}
                </li>
                  </NavLink>
              ))}
              </ul>
          </details>
          <details>
            <summary>
              <NavLink to={'/pricing'} className={"NavLinks"}>Pricing</NavLink>
            </summary>
          </details>
          <details>
            <summary>
              <NavLink to={"/register"} className={"NavLinks"}>
                Register Now
              </NavLink>
            </summary>
          </details>
          {/* <div>
            <NavLink to={"/register"} className={"NavLinks"}>
              <button className="button2">Get A Free Trial</button>
            </NavLink>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;