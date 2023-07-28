import React from 'react'
import mobileSeva from './mobileSeva.jpeg'
import hastakshar from './hastakshar.jpeg'
import aushidhi from './aushidhi.jpeg'
import pramaan from './pramaan.png'
import "./card.css"
export default function Servicescard() {
  return (

    <div className='grandParent'>

        <div className='head'>
            <p><span id='heading'>SERVICES</span> <span id='tec'>Technology Prowess Enhancing Quality of Life </span></p>
           
        </div>


    <div className='sparent'>
      
        

        <div className="scard" style={{width: '18rem'}}>
        <img src={mobileSeva} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Mobile Seva</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
        </div>

        </div>
        <div className="scard" style={{width: '18rem'}}>
        <img src={hastakshar} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">e-Hastakshar</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
        </div>
        </div>

        <div className="scard" style={{width: '18rem'}}>
        <img src={aushidhi} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">e-Aushadhi</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
        </div>
        </div>

        <div className="scard" style={{width: '18rem'}}>
        <img src={pramaan} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">ePramaan</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
        </div>
        </div>


       

    </div>
  
    </div>

 
  
  );
}
