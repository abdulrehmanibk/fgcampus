import React from 'react'
import FeatureCourses from './FeatureCourses';
import StepsLearning from './StepsLearning';
import Memorize from './Memorize';
import Banner from '../../Components/Banner';
import ShortBoxList from '../../Components/ShortBoxList/ShortBoxList';
import ContactBanner from '../../Components/ContactBanner/ContactBanner';
import { Link } from 'react-router-dom';


export const Home = () => {

  const data = [
    {
      heading: "24/7 FLEXIBLE SCHEDULE",
      para: "Always Available",
      icon: "fa-solid fa-clock", // Font Awesome icon for a clock
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "AFFORDABLE FEE",
      para: "Budget-Friendly",
      icon: "fa-solid fa-dollar-sign", // Font Awesome icon for dollar sign
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "MULTILINGUAL TUTORS",
      para: "Global Language Experts",
      icon: "fa-solid fa-globe", // Font Awesome icon for a globe
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "ONE ON ONE CLASSES",
      para: "Focuses on Individual Attention",
      icon: "fa-solid fa-user", // Font Awesome icon for a user
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "SUBSTITUTE TEACHERS",
      para: "Dedicated Team of Substitute Teachers",
      icon: "fa-solid fa-user-plus", // Font Awesome icon for adding a user
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "EASY ONLINE PAYMENTS",
      para: "One-Click Payments",
      icon: "fa-solid fa-credit-card", // Font Awesome icon for a credit card
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "GLOBAL REPUTATION",
      para: "Trusted by Students Worldwide",
      icon: "fa-solid fa-globe", // Font Awesome icon for a credit card
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    {
      heading: "PROGRESS REPORT ",
      para: "Knowledge Assessment",
      icon: "fa-solid fa-chart-line", // Font Awesome icon for a credit card
      icon2: "fa-solid fa-star", // Font Awesome icon for star ratings
    },
    // {
    //   heading: "ONLINE PORTAL",
    //   para: "Student Classes Records & History",
    //   icon: "fa-solid fa-laptop", 
    //   icon2: "fa-solid fa-star", 
    // },
  ];
  

  return (
    <>
      <Banner 
            imgs={'/images/homeback1.webp'}
            heading={'We Focus on Your Children’s Development'}
            para={'In addition to these core schools, students in a given country may also attend schools before and after primary elementary in the and secondary middle school in the us education. Kindergarten or preschool.'}
            children={
              <div style={{display: 'flex'}}>
                <Link className='button2' to={'/register'}>Join Now</Link>
              </div>
            }
      />
      
      <FeatureCourses />
      <Memorize />
      {/* <Marquee /> */}
      <StepsLearning />

      <ShortBoxList
      heading={'Why Choose Us?'}
      headpara={'Our key features include expert instructors, personalized lessons, and a range of convenient services.'}
      styles={{
        backgroundColor:"var(--c6)"
      }}
      >
          {data.map((item, index) => (
                <li key={index} style={{height:'15rem', backgroundImage: 'url(/images/about-bg.jpg)'}}>
                    <i class={item.icon} style={{color:'var(--c3)', fontSize:'5rem'}}></i>
                    <h4 style={{color:'var(--c3)'}}>{item.heading}</h4>
                    <p style={{color:'var(--c3)'}}>{item.para}</p>
                </li>
          ))}
      </ShortBoxList>
      <ContactBanner />
      
    </>
  )
}
