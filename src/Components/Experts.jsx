import React from 'react'
import expert1 from '../Assets/experts1.jpg'
import expert2 from '../Assets/expert2.jpg'
import expert3 from '../Assets/expert3.jpg'

function Experts() {
    return (
        <>
            <div className='experts'>
                <div className='experts-headings'>
                    <h1>Experted Attorneys</h1>
                    <p>Lorem ipsum dolor amet, consectetur adipisice elite
                        sede eiusmod tempor incidide labeore dolore magna.</p>
                        <div className='experts-heading-border'></div>
                </div>
                <div className='experts-content'>
                    <div className='team'>
                        <div className="team-img">
                            <img src={expert1} alt="team" />
                            <div className="team-overlay">
                                <div className="social-icons">
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-google"></i>
                                    <i class="bi bi-linkedin"></i>
                                </div>
                            </div>
                        </div>
                        <div className='team-content'>
                            <h3>Mark Smith</h3>
                            <p>CEO & Manager</p>
                        </div>
                    </div>

                    <div className='team'>
                        <div className="team-img">
                            <img src={expert2} alt="team" />
                            <div className="team-overlay">
                                <div className="social-icons">
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-google"></i>
                                    <i class="bi bi-linkedin"></i>
                                </div>
                            </div>
                        </div>
                        <div className='team-content'>
                            <h3>Ryan Printz</h3>
                            <p>Family Lawyer</p>
                        </div>
                    </div>
                    <div className='team'>
                        <div className="team-img">
                            <img src={expert3} alt="team" />
                            <div className="team-overlay">
                                <div className="social-icons">
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-google"></i>
                                    <i class="bi bi-linkedin"></i>
                                </div>
                            </div>
                        </div>
                        <div className='team-content'>
                            <h3>Steve Martin</h3>
                            <p>Financial Lawyer</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experts