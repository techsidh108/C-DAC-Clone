import React from 'react'
import tetra from './tetra.jpeg'
import segrov from './segrov.jpg'
import param from './param.png'
import digitalaya from './digitalaya.png'
import "./card.css"
export default function Servicescard() {
  return (

    <div className='card2' >

        <div className='head2'>
            <p><span id='heading'>PRODUCTS</span> <span id='tec'>Catering to Diverse Societal Requirements across Verticals </span></p>
           
        </div>


    <div className='sparent'>
      
        

        <div className="scard" style={{width: '18rem'}}>
        <img src={tetra} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Tetra</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
        </div>

        </div>
        <div className="scard" style={{width: '18rem'}}>
        <img src={segrov} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Secrov</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
        </div>
        </div>

        <div className="scard" style={{width: '18rem'}}>
        <img src={param} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">PARAM SHAVAK DL GPU</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
        </div>
        </div>

        <div className="scard" style={{width: '18rem'}}>
        <img src={digitalaya} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">digitalaya</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
        </div>
        </div>


       

    </div>
  
    </div>

 
  
  );
}