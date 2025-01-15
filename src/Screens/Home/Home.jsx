import React from 'react'
import './Home.css';
import FeatureCourses from './FeatureCourses';
import WhyUs from './WhyUs';
import Marquee from './Marquee';
import StepsLearning from './StepsLearning';
import Memorize from './WhyUs';

export const Home = () => {
  return (
    <>
      <main className="hero">
    <div className="hero_content">
        <h1>We Focus on Your Children’s Development</h1>
        <p>In addition to these core schools, students in a given country may also attend schools before and after primary elementary in the and secondary middle school in the us education. Kindergarten or preschool.</p>
        <div>
        <button className='button2'>Join Now</button>
        <button className='button1'>View Courses</button>
        </div>
    </div>
      </main>
      <FeatureCourses />
      <Memorize />
      <Marquee />
      <StepsLearning />
    </>
  )
}
