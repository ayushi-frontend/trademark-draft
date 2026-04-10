import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import whyus from '../Assets/whyus bg.jpg'
import icon1 from '../Assets/money.png'

function WhyUs() {
  useEffect(() => {
          AOS.init({
              duration: 1200,              // smooth & premium speed
              easing: "ease-out-cubic",    // professional motion
              once: true,                  // ek baar hi animation
              offset: 200,                 // thoda late start (smooth)
              delay: 100,                  // soft delay
              anchorPlacement: "top-bottom",
          });
      }, []);
  return (
    <>
      <div className='why-us'>
        <div className='why-us-img'><img src={whyus}></img></div>
        <div className='why-us-content'data-aos="fade-up">
          <h1>Why Hire Us ?</h1>
          <div className='why-us-content-inner'>
            <p>Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod tempor incidide labeore dolore magna.</p>
            <div className='why-us-border'></div>
          </div>
          <div className='why-us-services'>
              <div className='s-card-main'>
                <div>
                  <img src={icon1}></img>
                </div>
                <h3>Exclusively Areas</h3>
                <p>Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide.</p>
              </div>
              <div className='s-card-main'>
                <div>
                  <img src={icon1}></img>
                </div>
                <h3>Exclusively Areas</h3>
                <p>Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide.</p>
              </div>
              <div className='s-card-main'>
                <div>
                  <img src={icon1}></img>
                </div>
                <h3>Exclusively Areas</h3>
                <p>Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide.</p>
              </div>
              <div className='s-card-main'>
                <div>
                  <img src={icon1}></img>
                </div>
                <h3>Exclusively Areas</h3>
                <p>Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor incidide.</p>
              </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default WhyUs