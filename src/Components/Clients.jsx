import React from 'react'
import clients1 from '../Assets/1.jpg'
import clients2 from '../Assets/2.jpg'
import clients3 from '../Assets/3.jpg'
import clients4 from '../Assets/4.jpg'
import clients5 from '../Assets/5.jpg'

function Clients() {
  return (
    <div className='clients'>
        <img src={clients1}></img>
        <img src={clients2}></img>
        <img src={clients3}></img>
        <img src={clients4}></img>
        <img src={clients5}></img>
    </div>
  )
}

export default Clients