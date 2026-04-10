import React from 'react'
import logo from '../Assets/logo-light.png'
import blog1 from '../Assets/blog2.jpg'
import blog2 from '../Assets/blog2.jpg'
import blog3 from '../Assets/3 (1).jpg'

function Footer() {
  return (
    <>
      <div className='footer'>
        <ul>
            <img src={logo}></img>
            <li>Proin gravida nibh vel velit auctor aliquet anean lorem quis. bindum auctor, nisi elite conset ipsums sagtis id duis sed odio sit.</li>
            <div className='footer-icon'>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-instagram"></i>
            </div>
        </ul>
         <ul>
            <h2 className='big-font'>Blog Posts</h2>
            <div className='blogs'>
               <img className='blog1' src={blog1}></img>
               <div className='blog-content'>
                <p>Four ways to cheer yourself up on the Blue Monday!</p>
                <div className='entry'>
                    <h5>Jan 20, 2017</h5>
                    <div className='comments'>
                        <i class="bi bi-chat"></i>
                        <pre>6 Comments</pre>
                    </div>
                </div>
               </div>
            </div>
             <div className='blogs'>
               <img className='blog1' src={blog2}></img>
               <div className='blog-content'>
                <p>Old cameras can capture images better than nowdays camera!</p>
                <div className='entry'>
                    <h5>Jan 20, 2017</h5>
                    <div className='comments'>
                        <i class="bi bi-chat"></i>
                        <pre>3 Comments</pre>
                    </div>
                </div>
               </div>
            </div>
             <div className='blogs'>
               <img className='blog1' src={blog3}></img>
               <div className='blog-content'>
                <p>Four ways to cheer yourself up on the Blue Monday!</p>
                <div className='entry'>
                    <h5>Jan 20, 2017</h5>
                    <div className='comments'>
                        <i class="bi bi-chat"></i>
                        <pre>6 Comments</pre>
                    </div>
                </div>
               </div>
            </div>
           
        </ul>
         <ul>
            <h2 className='big-font'>Get In Touch</h2>
            <div className='location'>
                <i class="bi bi-geo-alt-fill"></i>
                <p>1220 Petersham town, Wardll St New South Wales Australia PA 6550.</p>
            </div>
             <div className='location'>
                <i class="bi bi-telephone-fill"></i>
                <p>(04) 491 570 110</p>
            </div>
            <div className='location'>
                <i class="bi bi-envelope"></i>
                <p>contact@zytheme.com</p>
            </div>
        </ul>
       </div>
       <div className='copy-right'>
        <p>© 2017, All rights reserved.</p>
       </div>
    </>
  )
}

export default Footer