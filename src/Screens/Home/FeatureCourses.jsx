import React, { useEffect, useRef, useState } from 'react'
import './FeatureCourses.css';
import {CourseData} from '../Courses/CoursesData'
import { Link } from 'react-router-dom';

const FeatureCourses = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      if (containerRef.current) {
        let rounded;
        let a = containerRef.current.offsetWidth;
        let b = a/25 + CourseData.length;
        let c = b/16;        
      }
    }, []);
    const decimalStr = width.toString().split('.')[1];
    const i = decimalStr ? parseFloat(`0.${decimalStr}`) : 0;


      const nextSlide = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === CourseData.length - 1 ? 0 : prevIndex +  1
            );        
      };
    
      const prevSlide = () => {

            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? CourseData.length -1 : prevIndex -  1
              );
      };

  return (
    <>
    <section className="container"
            >
        <h2>Our Regular Courses</h2>
        <p>A college course is a class offered by a college or university. <br />These courses are usually part of a program leading.</p>
        <div className="cards"
        // style={{
        //     width:'62rem'
        // }}
        >
        <button className="slider-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider_container"
            ref={containerRef}
        >


            <div className="slider"
            style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out',
            }}
            >
        {CourseData.map((card, index) => (
          <div
            key={index}
            className={`card`}
          >
            <div className="card_img">
              <img src={card.image} alt="" />
            </div>
            <p>{card.title}</p>
            <Link className="button3" to={`/courses/${card.id}`}>Read More</Link>
          </div>
        ))}
        </div>
        </div>
        <button className="slider-button next" onClick={nextSlide}>
        &#10095;
      </button>
</div>
    <hr className='hr'></hr>
    </section>
    </>
  )
}

export default FeatureCourses;


