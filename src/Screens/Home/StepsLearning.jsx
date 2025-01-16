import React from "react";
import TwoChild from "../../Components/TwoChild/TwoChild";

const StepsLearning = () => {
  return (
    <>
      <TwoChild
        imgs={<img src="/images/qot-quran-mobile.webp" alt="" />}
        text={
          <>
            <h2>
              How to memorize Quran <span>easily online</span>
            </h2>
            <p className="description">
              Online resources have made Quran memorization easier, offering
              tools like audio recitations, apps, and virtual classes. These
              platforms provide flexibility, allowing learners to memorize at
              their own pace while deepening their understanding of the Quran.
              <br />
              <br />
              With the advent of online resources, it has become more accessible
              than ever before.
            </p>
            {/* <ul className="benefits-list">
            <li>Promotes Quranic understanding.</li>
            <li>Combines faith with tech.</li>
            <li>Encourages spiritual growth.</li>
            <li>Supports lifelong learning.</li>
            <li>Connects tradition to modernity.</li>
            <li>Offers diverse IT skills.</li>
            <li>Bridges faith and career.</li>
            <li>Enhances community knowledge.</li>
            <li>Simplifies online education.</li>
            <li>Empowers ethical professionals.</li>
          </ul> */}
            <button className="button2">Know More</button>
          </>
          
        }
        flexDirection="row-reverse"

      />

      <TwoChild
        imgs={<img src="/images/qot-laptop-quran.webp"></img>}
        text={
          <>
            <h2>
              Easy Quran learning through <span>online</span>
            </h2>
            <p>
              Online Quran learning gives you the convenience of learning Quran
              lessons, which you can perform at your own time and place. This is
              an important opportunity for religious education that can be
              easily obtained.
              <br />
              <br />
              Online Quranic education offers flexibility and convenience,
              allowing you to tailor your learning experience to your needs and
              schedule.
            </p>
            <button className="button2">Know More</button>
          </>
        }
      />
    </>
  );
};

export default StepsLearning;
