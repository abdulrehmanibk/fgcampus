import React from 'react'
import './Courses.css';


const CoursesPage = ({selectedProduct}) => {

  return (
    <>
    <div className="banner">
            <h2>{selectedProduct.title}</h2>
            {/* <p>
            <a href="/"> Home</a> {">"} Courses
          </p> */}
          </div>
          <header className="course-header">
            <div className="course-header-image">
              <img src="/images/2148705870.jpg" alt="alt"/>
            </div>

            <div className="course-header-content">
              <h1>{selectedProduct.title} </h1>
              <p className="subtitle">{selectedProduct.subTitle}</p>
              <p className="aboutP">{selectedProduct.aboutCourse}</p>

              <div className="course-header-p">
                <p>12 weeks</p>
                <p>All levels</p>
                <p>Certificate</p>
              </div>
            </div>
          </header>
          <div className="course_detail">
            <h3>What You Will Learn</h3>
            <ul>
              <li>In-Depth Understanding of the Ten Qirat</li>
              <li>Correct Pronunciation and Recitation Styles</li>
              <li>Guidance from Experienced Qirat Instructors</li>
            </ul>
          </div>
          <div className="course-stats">
            <div>
              <h2>60+</h2>
              <p>Total Hours</p>
            </div>
            <div>
              <h2>2.4K+</h2>
              <p>Active Students</p>
            </div>
            <div>
              <h2>94%</h2>
              <p>Completion Rate</p>
            </div>
            <div>
              <h2>12</h2>
              <p>Total Modules</p>
            </div>
          </div>
    </>
  )
}

export default CoursesPage