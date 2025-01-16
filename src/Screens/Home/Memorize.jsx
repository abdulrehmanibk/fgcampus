import React from 'react';

import TwoChild from '../../Components/TwoChild/TwoChild';

const Memorize = () => {
  return (
    <TwoChild 
    imgs={<img src='/images/qot-tajweed.webp'></img>}
    text={
        <>
            <h2>Easy Quran learning through <span>online</span></h2>
            <p>Online Quran learning gives you the convenience of learning Quran lessons, which you can perform at your own time and place. This is an important opportunity for religious education that can be easily obtained.
            <br />
            <br />
            Online Quranic education offers flexibility and convenience, allowing you to tailor your learning experience to your needs and schedule.</p>
            <button className="button2">Know More</button>

        </>
    }
    />    

  );
};

export default Memorize;
