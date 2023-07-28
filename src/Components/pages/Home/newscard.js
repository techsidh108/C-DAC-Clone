import React from 'react'
import './newscard.css';
import nimag1 from './nimag1.jpg'
import nimag2 from './nimag2.jpg'
import nimag3 from './nimag3.jpg'

export default function Newscard() {
  return (
    <nav className="cardBack">
      <h2 className='newsheading'>Latest updates</h2>
  <div className="ncard">
    <div className="imgbox">
      <img id="image" src={nimag1} />
    </div>
    <div className="content">
      <h3>SKUAST-K, C-DAC Kolkata ink MoU</h3>
      <p>
        Srinagar, Mar 1: Sher-e-Kashmir University of Agricultural Sciences and
        Technology of Kashmir (SKUAST-K) has signed a memorandum of
        understanding (MOU) with the Centre of Development for Advanced
        Computing (CDAC), Kolkata...
      </p>
    </div>
  </div>
  <div className="ncard">
    <div className="imgbox">
      <img id="image" src={nimag2} />
    </div>
    <div className="content">
      <h3>
        India's Chip Designers To Get Access To State-Of-The-Art Tools At Newly
        Launched ChipIN Centre At C-DAC Bengaluru
      </h3>
      <p>
        Union Minister of State for Electronics and Information Technology
        (MeitY) Rajeev Chandrasekhar..
      </p>
    </div>
  </div>
  <div className="ncard">
    <div className="imgbox">
      <img id="image" src={nimag3} />
    </div>
    <div className="content">
      <h3>
        C-DAC Transfers Indigenously Developed Smart Meter And EV Charger
        Technologies To Private Firms
      </h3>
      <p>
        The Centre for Development of Advanced Computing (C-DAC),
        Thiruvananthapuram has transferred two cutting-edge technologies to
        private firms..
      </p>
    </div>
  </div>
</nav>

  )
}
