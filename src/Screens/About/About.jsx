import React from 'react'
import './About.css';
import ShortBoxList from '../../Components/ShortBoxList/ShortBoxList';

const About = () => {

    const data = [
        { heading: 'Reading with Tajweed' },
        { heading: 'Hifz (Memorization)' },
        { heading: 'Quran Translation' },
        { heading: 'Tafseer of Quran' },
        { heading: 'Noorani Qaida' },
        { heading: 'Basic Arabic Learning' },
        { heading: 'Arabic Language' },
        { heading: 'Islamic Studies' },
    ];


  return (
    <>
    <div class="aboutcontainer">
        <h1>About <span>F.G Campus</span></h1>
        <p>
        <span>Quran Online</span> Tutoring is a premier platform for Quran learning, offering live online classes to students worldwide. Our experienced and certified tutors provide diverse courses tailored to meet all learning needs.</p>    
   
    <div class="aboutmore">
    <div class="aboutmore-cards">
            <div className='aboutmore-cards-head'>
                <i class="fa-solid fa-moon"></i>
                <h4>Core Values</h4>
            </div>
            <p>Rooted in our faith, our philosophy is to teach the Quran with Tajweed rules, ensuring students gain a complete understanding of Quranic teachings. We welcome all, including new Muslims and those eager to learn.</p>
        </div>
        <div class="aboutmore-cards">
            <div className='aboutmore-cards-head'>
                <i class="fa-solid fa-book-open"></i>
                <h4>Mission and Vision</h4>
            </div>
            <p>Our mission is to spread Quranic knowledge globally, making Quranic education accessible to all. We aim to foster a deep connection with the Quran, promoting joy and understanding of its teachings.</p>
        </div>
    </div>
    <div class="aboutIntro">    
        
        <div class="aboutIntroCards">
            <div><h2>Who We Are</h2></div>
            <div>
                <p> we make learning the Quran accessible and enriching for everyone. Our experienced instructors provide personalized guidance, fostering a love for the Quran while encouraging spiritual growth. </p>
            </div>
            <div> <button class="button2" routerLink="/contact">Get in Touch</button></div>
        </div>
    </div>

    <ShortBoxList 
    heading={'What You Will Learn'}
    styles={{color:'var(--c3)'}}
    >
    {data.map((item, index) => (
                <li key={index}>
                    <i class="fa-brands fa-discourse"></i>
                    <h4>{item.heading}</h4>
                </li>
            ))}
    </ShortBoxList>

    </div>

    </>
  )
}

export default About