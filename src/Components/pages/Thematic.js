import React, { useState } from 'react'
import "./Thematic.css"
import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/bg3.png'
import bg4 from '../../assets/bg4.png' 
import bg5 from '../../assets/bg5.png'


function Thematic() {


    const cardList =[
        {   id:'card1',
            img:bg1,
            title:'High Performance Computing',
            text:"High Performance Computing (HPC) plays an important role in both scientific advancement and economic competitiveness of a nation - making production of scientific and industrial solutions faster, less expensive, and of higher quality. HPC is a key component in many applications: designing vehicles and airplanes; designing high-rise buildings and bridges; discovery of drugs; discovery and extraction of new energy sources like oil and natural gas; weather forecasting; and many more",
            
        },
        {   id:'card2',
            img:bg2,
            title:'Strategic Electronics',
            text:"C-DAC has expertise in the design of VLSI Systems, ASIC IP development, microprocessor, microcontroller and DSP hardware and software technologies, which form the key building blocks in many industrial and strategic technology areas. C-DAC has designed, deployed and transferred manufacturing technology for numerous large scale electronics systems as well as small footprint VLSI and Embedded System Products for applications ranging from Supercomputing, Energy Measurement, Personal Computing, Medical appliances, Power and Process control, Wireless Broadband, Sonar and Acoustic detection, etc., for a range of verticals such as railways, steel, power generation, defense, health-care, police, broadcast media and many more. Transfers of Technology for large scale manufacturing have proved the commercial viability of these products time and again.",
            
        },
        {   id:'card3',
            img:bg3,
            title:' Multilingual & Heritage Computing',
            text:"India is a unique country in the world having 22 scheduled languages besides heritage languages and over one hundred widely used languages with different scripts. Despite a very impressive growth of computers and the Internet over the past few decades, most of the content on the Internet and most of the ICT based solutions in India are still available only in English. This is in stark contrast to the ground reality as hardly 10% of Indians use English as a language for communication. C-DAC realized long ago that penetration of IT to masses is possible in India only if we develop tools and technologies to overcome this language barrier. Hence, for over the last 25 years, C-DAC has been pursuing pioneering research in Language Technology and Heritage Computing",
            
        },
        {   id:'card4',
            img:bg4,
            title:'Software Technologies',
            text:"The objective of C-DAC in software technology research is to foster R & D activities in the following sub-domains of software technologies: - Software-Intensive Systems Engineering, Emerging Software Technologies, Distributed Systems and Database Technology.",
            
        },
        {   id:'card5',
            img:bg5,
            title:'Cyber Security & Forensics',
            text:'Increased Internet penetration has given exponential rise in sophisticated attacks on Information Technology (IT) infrastructure. Attackers are gaining access to sensitive information like credit card details and other financial information. Smartphone attacks are growing in multiple folds. Also with the growth of 3G services and business transactions using mobile phones, there is a substantial increase in mobile malware. In order to make our IT infrastructure resilient against these threats, there is a need for cutting-edge Research and Development efforts in Cyber Security. C-DAC has been actively pursuing R & D in a number of sub-areas in Cyber Security domain',
            
        }
    ]



    // const [cards, setcard] = useState({id:'card1', id:'card2', id:'card3', id:'card3', id:'card4', id:'card5'})
    const [currCard, setCurrCard] = useState('card1')






    const handleButtonClick1=()=>{
       
            setCurrCard('card1');
    }
    const handleButtonClick2=()=>{
            setCurrCard('card2');
    }
    const handleButtonClick3=()=>{
            setCurrCard('card3');
    }
    const handleButtonClick4=()=>{
            setCurrCard('card4');
    }
    const handleButtonClick5=()=>{
            setCurrCard('card5');
    }


    var tempCard=[{}];

    tempCard=cardList.filter((obj)=> obj.id===currCard)

    console.log(tempCard);



  return (
    
    <>
        <div className='main'>

            <h2 className='heading'>Thematic Area</h2>

            <div className='row'>

                <div className='col-lg-3'>

                <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action" aria-current="true" onClick={handleButtonClick1}>
                        High Performance Computing
                        </button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={handleButtonClick2}>Strategic Electronics</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={handleButtonClick3}>Multilingual & Heritage Computing</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={handleButtonClick4}>Software Technologies</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={handleButtonClick5}>Cyber Security & Forensics</button>
                </div>


                </div>

                <div className='col-lg-9'>            
                        {
 
                                <ThemeCard
                                id={tempCard[0].id}
                                img={tempCard[0].img}
                                title={tempCard[0].title}
                                text={tempCard[0].text}
                                />

                        }

                </div>

            </div>

        </div>
         </>
 )
}



const ThemeCard=({id,img,title,text})=>(

console.log({id}),
console.log({title}),

    <div id={id} className="card" style={{width: '90%', height:'80vh'}}>
        <img src={img} className="cardt-img-top" alt="..."/>

        <div className="cardt-body">
            <h5 className="cardt-title">{title}</h5>
            <p className="cardt-text">{text}</p>
            <a href="#" className="btn2 btn2-primary">Read More...</a>
        </div>
    </div>
)
export default Thematic;