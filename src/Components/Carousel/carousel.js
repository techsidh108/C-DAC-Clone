import React from 'react'
import a from './a.jpg'
import b from './b.jpg'
import e from './e.jpg'
export default function carousel() {
  return (
    
    <>
    
    
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={a} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={b} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={e} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    
    </>
    
  )
}