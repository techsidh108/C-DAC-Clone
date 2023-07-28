import React from "react"
import './Footer1.css'

function Footer1(){

    return(

 <footer className="page-footer font-small blue pt-4">

    <div className="container-fluid text-center text-md-left">
        <div className="row" id="rowId1">
           
            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">QUICK LINKS</h5>
                    <ul className="list-unstyled1" id="quickLinkid">
                        <li><a href="#">Sponsored Projects</a></li>
                        <li><a href="#">Download software tools & fonts for 22 Indian languages</a></li>
                        <li><a href="#">North East Initiatives</a></li>
                        <li><a href="#">Portals</a></li>
                        <li><a href="#">Patents</a></li>
                    
                    </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">PRESS RELEASE / NEWS</h5>
                    <ul className="list-unstyled">
                        <li>Visiting Finland Minister of Economic Affairs Mika Lintila meets Union Minister of State (Independent Charge) Science and Technology, Dr Jitendra Singh</li>
                        <li>Product and Services</li>
                        <li>C-DAC celebrates 36th Foundation Day with launch of innovative tech, products</li>
                        <li>C-DAC to launch several programs on its 36 Foundation Day</li>
                    </ul>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-4 mt-md-0 mt-3">
                <h5 className="text-uppercase">EDUCATION & TRAINING</h5>
                    <ul className="list-unstyled">

                            <li>PG Diploma Next Batch Commencement: 17 March 2023</li>
                            <li>Dates of CCAT Application: 20 December 2022 to 18 January 2023</li>
                            <li>Dates of CCAT at Test Centres: 28 and 29 January 2023</li>
                            <li>Excellent Placements for C-DAC's PG Diploma Students</li>

                    </ul>
            </div>


        </div>
    </div>

    {/* <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div> */}

</footer>
    )
}
export default Footer1