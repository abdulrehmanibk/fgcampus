import React, { useState } from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

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
                    dolorsit
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/courses/2" className={"NavLinks"}>
                    dolorsit
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/courses/3" className={"NavLinks"}>
                    dolorsit
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/courses/4" className={"NavLinks"}>
                    dolorsit
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
                <li>
                  {" "}
                  <NavLink to="/courses/1" className={"NavLinks"}>
                    dolorsit
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/courses/2" className={"NavLinks"}>
                    dolorsit
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/courses/3" className={"NavLinks"}>
                    dolorsit
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/courses/4" className={"NavLinks"}>
                    dolorsit
                  </NavLink>
                </li>
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
            {!isResponsiveNav ? "OPEN" : "CLOSE"}
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
            <p>Courses</p>
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
              <NavLink to="/courses/1" className={"NavLinks"}>
                <li> dolorsit </li>
              </NavLink>
              <NavLink to="/courses/2" className={"NavLinks"}>
                <li> dolorsit </li>
              </NavLink>
              <NavLink to="/courses/3" className={"NavLinks"}>
                <li> dolorsit </li>
              </NavLink>
              <NavLink to="/courses/4" className={"NavLinks"}>
                <li> dolorsit </li>
              </NavLink>
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
          <div>
            <NavLink to={"/register"} className={"NavLinks"}>
              <button className="button2">Get A Free Trial</button>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;