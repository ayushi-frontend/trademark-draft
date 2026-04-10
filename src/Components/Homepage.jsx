import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import countimg1 from '../Assets/icon3.jpg'

function Homepage() {

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
            <div className='banner' id="hero-section">
                <div className='overlay'>
                    <div className='banner-content' data-aos="fade-up">
                        <h1>Welcome to Legal Firm</h1>
                        <p>
                            This should be used to tell a story and let your users <br />
                            know a little more about your service.
                        </p>
                        <button>FREE CONSULTATION</button>
                    </div>
                </div>
            </div>
            <div className="count-container-main">
                <div className="counter-container">
                    <div className="count">
                        <div className="count-img"><img src={countimg1}></img></div>
                        <div className="count-content">
                            <h1>361</h1>
                            <p>Cases Won</p>
                        </div>
                    </div>
                    <div className="count">
                        <div className="count-img"><img src={countimg1}></img></div>
                        <div className="count-content">
                            <h1>83</h1>
                            <p>Skilled Lawyer</p>
                        </div>
                    </div>
                    <div className="count">
                        <div className="count-img"><img src={countimg1}></img></div>
                        <div className="count-content">
                            <h1>1157</h1>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="count">
                        <div className="count-img"><img src={countimg1}></img></div>
                        <div className="count-content">
                            <h1>231</h1>
                            <p>Great Rewards</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Homepage;
