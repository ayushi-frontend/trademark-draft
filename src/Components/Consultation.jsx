import React from 'react'
import freeconsultation from '../Assets/free consultation.jpg'

function Consultation() {
  return (
    <>
      <div className='free-consultation'>
        <div className='free-content'>
            <h1>Free Consultation</h1>
            <p>Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod tempor incidide labeore dolore magna.</p>
            <div className='free-consultation-border'></div>
            <div className='free-concultation-list'>
                <div className='list1'>
                    <input placeholder='Your Name'></input>
                    <input placeholder='Your Email'></input>
                </div>
                <input placeholder='Practice Area'></input>
                <input className='your-message' placeholder='Your Message'></input>
                <button className='list-btn'>SEND REQUEST</button>
            </div>
        </div>
        <div className='free-img'><img src={freeconsultation}></img></div>
      </div>
    </>
  )
}

export default Consultation