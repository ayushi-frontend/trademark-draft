import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutfirm from '../Assets/about firm.png'
import signature from '../Assets/signture.png'

function AboutFirm() {

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
            <div className='aboutfirm'>
                <div className='about-firm'>
                    <div className='firm-img'><img src={aboutfirm}></img></div>
                    <div className='firm-content' data-aos="fade-up">
                        <h2><span className='span'>About</span> Our Firm</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sede do eiusmod tempor incididunt ut labore dolore magna aliqa Ut enim ad minim veniam, quis nostrud exercitation.</h3><br></br>

                        <h3 className='firm-contenh3'>Euis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida.</h3>
                        <img src={signature}></img>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutFirm