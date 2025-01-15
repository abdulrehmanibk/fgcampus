import React from 'react'
import './FeatureCourses.css';

const FeatureCourses = () => {
  return (
    <>
    <section className="container">
        <h2>Our Regular Courses</h2>
        <p>A college course is a class offered by a college or university. <br />These courses are usually part of a program leading.</p>
        <div className="cards">
            <div className="card">
                <div className="card_img">
                    <img src="/images/qot-learn-noorani-qaidah.webp" alt="" />
                </div>
                <p>A classroom is a learning space, a room in which both children and adults learn.Parts of education.</p>
                <button className='button1'>Read More</button>
            </div>            
            <div className="card">
                <div className="card_img">
                <img src="/images/qot-quran-with-tajweed.webp" alt="" />
                </div>
                <p>A classroom is a learning space, a room in which both children and adults learn.Parts of education.</p>
                <button className='button1'>Read More</button>
            </div>            
            <div className="card">
                <div className="card_img">
                <img src="/images/qot-quran-translation.webp" alt="" />
                </div>
                <p>A classroom is a learning space, a room in which both children and adults learn.Parts of education.</p>
                <button className='button1'>Read More</button>
            </div>
        </div>
    <hr className='hr'></hr>
    </section>
    </>
  )
}

export default FeatureCourses;