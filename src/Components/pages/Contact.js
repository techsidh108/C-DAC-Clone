import React from 'react'
import './Contact.css'
import Cdimg1 from '../../assets/cdimg1.jpeg'
import Cdimg2 from '../../assets/cdimg2.jpg'
import Cdimg3 from '../../assets/cdimg3.jpg'

export default function Contact() {
  return (
    <div>
    <div className="Cdimgback">
       <div className="address">
        <h2>SILCHAR</h2>
      NIT Silchar campus 
      <h5>
        <strong>Centre for Development of Advanced </strong>
      </h5>
      <h5>
      <strong>Computing</strong>

      </h5>
      <h5>Silchar - 788010.</h5>
     <h5> Assam (India) </h5>
      <h5> Phone: +91 03842-242009</h5>
      <h5> Fax: +91 03842-242009 </h5>
      </div> 
     <img src={Cdimg1} className="cdimag" alt='imagecdac'></img>
     <div className="Cdimag2">
     <img src={Cdimg2} id="cdimag2" alt='imagecdac'></img>
     <img src={Cdimg3} id="cdimag3" alt='imagecdac'></img>

     </div>
    </div>
    
   </div>
  )
}
