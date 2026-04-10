import React, { useEffect } from "react";   // ✅ useEffect import
import lawimg1 from "../Assets/police-handcuffs.png";
import lawimg2 from "../Assets/money.png";
import lawimg3 from "../Assets/save-the-world.png";
import lawimg4 from "../Assets/services.png";
import lawimg5 from "../Assets/software-application.png";
import lawimg6 from "../Assets/white-house.png";
import AOS from "aos";
import "aos/dist/aos.css";

function PracticeArea() {

  useEffect(() => {
    AOS.init({
      duration: 1200,             // premium smooth speed
      easing: "ease-out-cubic",   // professional motion
      once: true,
      offset: 200,
      delay: 100,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <div className="practice-area">
        {/* Heading animation */}
        <div
          className="practicearea-heading"
          data-aos="fade-up"
        >
          <h3>Practice Area</h3>
          <p>
            Lorem ipsum dolor amet, consectetur adipisice elite sede <br />
            eiusmod tempor incidide labeore dolore magna.
          </p>
          <div className="practicearea-border"></div>
        </div>

        {/* Cards animation */}
        <div className="practice-area-rules">

          <div className="law"data-aos="fade-up" data-aos-delay="0">
            <div className="law-img"><img src={lawimg1} alt="" /></div>
            <div className="law-content">
              <h3>Criminal Law</h3>
              <p>Lorem ipsum dolor sit amet, conse adipise elit.</p>
            </div>
          </div>

          <div className="law" data-aos="fade-up" data-aos-delay="100">
            <div className="law-img"><img src={lawimg6} alt="" /></div>
            <div className="law-content">
              <h3>Real Estate Law</h3>
              <p>Lorem ipsum dolor sit amet, conse adipise elit.</p>
            </div>
          </div>

          <div className="law" data-aos="fade-up" data-aos-delay="200">
            <div className="law-img"><img src={lawimg4} alt="" /></div>
            <div className="law-content">
              <h3>Family Law</h3>
              <p>Lorem ipsum dolor sit amet, conse adipise elit.</p>
            </div>
          </div>

          <div className="law" data-aos="fade-up" data-aos-delay="300">
            <div className="law-img"><img src={lawimg3} alt="" /></div>
            <div className="law-content">
              <h3>International Law</h3>
              <p>Lorem ipsum dolor sit amet, conse adipise elit.</p>
            </div>
          </div>

          <div className="law" data-aos="fade-up" data-aos-delay="400">
            <div className="law-img"><img src={lawimg2} alt="" /></div>
            <div className="law-content">
              <h3>Financial Law</h3>
              <p>Lorem ipsum dolor sit amet, conse adipise elit.</p>
            </div>
          </div>

          <div className="law" data-aos="fade-up" data-aos-delay="500">
            <div className="law-img"><img src={lawimg5} alt="" /></div>
            <div className="law-content">
              <h3>Technology Law</h3>
              <p>Lorem ipsum dolor sit amet, conse adipise elit.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default PracticeArea;
