import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import client1 from "../Assets/client.png";

function ClientFeedback() {
    return (
        <div className="client-feedback">
            <div className="client-content">
                <h1>Clients Feedback</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="client-border"></div>
            </div>

            <Swiper className="swipper-main"
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                slidesPerGroup={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={800}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                <SwiperSlide>
                    <div className="feedback-card">
                        <div className="client-img">
                            <img src={client1} alt="Rahul" />
                        </div>
                        <p>
                            “Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”
                        </p>
                        <span>- Mark Smith</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feedback-card">
                        <div className="client-img">
                            <img src={client1} alt="Rahul" />
                        </div>
                        <p>
                            “Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”
                        </p>
                        <span>- Mark Smith</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feedback-card">
                        <div className="client-img">
                            <img src={client1} alt="Rahul" />
                        </div>
                        <p>
                            “Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”
                        </p>
                        <span>- Mark Smith</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feedback-card">
                        <div className="client-img">
                            <img src={client1} alt="Rahul" />
                        </div>
                        <p>
                            “Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”
                        </p>
                        <span>- Mark Smith</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feedback-card">
                        <div className="client-img">
                            <img src={client1} alt="Rahul" />
                        </div>
                        <p>
                            “Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”
                        </p>
                        <span>- Mark Smith</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feedback-card">
                        <div className="client-img">
                            <img src={client1} alt="Rahul" />
                        </div>
                        <p>
                            “Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”
                        </p>
                        <span>- Mark Smith</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ClientFeedback;



