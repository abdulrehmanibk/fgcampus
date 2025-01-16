import React from 'react'
import './Courses.css';
import Banner from '../../Components/Banner';
import Stats from '../../Components/Stats/Stats';
import BarFeatures from '../../Components/BarFeatures/BarFeatures';


const CoursesPage = ({selectedProduct}) => {

  return (
    <>
          <Banner 
          imgs={'/images/course-bg.jpg'}
          heading={selectedProduct.title}
          />
          
          <header className="course-header">
            <div className="course-header-image">
              <img src="/images/2148705870.jpg" alt="alt"/>
            </div>

            <div className="course-header-content">
              <h1>{selectedProduct.title} </h1>
              <p className="subtitle">{selectedProduct.subTitle}</p>
              <p className="aboutP">{selectedProduct.aboutCourse}</p>
  
              <BarFeatures 
              b1={'12 weeks'}
              b2={'All levels'}
              b3={'Certificate'}
              />

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
      <Stats />
    </>
  )
}

export default CoursesPage