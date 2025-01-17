import React, { useEffect, useRef, useState } from 'react'
import './FeatureCourses.css';
import {CourseData} from '../Courses/CoursesData'

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
            
        // rounded = Math.round(c); 
        setWidth(c);
        // console.log("containerRef.current.offsetWidth ", containerRef.current.offsetWidth);
        // console.log("c ", c);
        
      }
    }, []);
    const decimalStr = width.toString().split('.')[1];
    const i = decimalStr ? parseFloat(`0.${decimalStr}`) : 0;


      const nextSlide = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex >= CourseData.length - width ? 0 : prevIndex +  1
            );        
      };
    
      const prevSlide = () => {

            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? CourseData.length - width  : 0
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
                transform: `translateX(-${currentIndex * 25}rem)`,
                transition: 'transform 0.5s ease-in-out',
            }}
            >
        {CourseData.map((card, index) => (
          <div
            key={index}
            className={`card`}
          >
            <div className="card_img">
              <img src={card.img} alt="" />
            </div>
            <p>{card.title}</p>
            <button className="button1">Read More</button>
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


