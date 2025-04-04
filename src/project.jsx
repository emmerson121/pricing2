import React, { useState } from "react";
import './styles.css';
import Navbar from "./navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import flower from './img/flower.png';
// import blue from './img/blue.png';
import cover3 from './img/cover3.jpg';
import facebook from './img/facebook.png';
import linkedin from './img/linkedin.png';
import emmerson from './img/emmerson.png';
import microgpt from './img/microgpt.png';
import completeweb from './img/completeweb.png';
import cryptoweb from './img/cryptoweb.png'; 

const Project = () => {
  const [toggle, setToggle] = useState(true);
    const toggleModal = () => {
      setToggle(!toggle);
      document.body.style.overflow = "hidden";
    };
  
    const closeModal = () => {
      setToggle(true);
      document.body.style.overflow = "auto";
    };
  
    return(
        <div className="container">
            <div  className='fixedWidth'>
          <div className="cover">
            <div className='navbar1'>
              <div className="icon">
        <div className='main-image'><img className='image' src={cover3} alt=''/></div>
        <div className='name'>Ebiefie Emmerson</div>  
        </div>     
        <div className="bar"><FontAwesomeIcon onClick={toggleModal} icon={faBars} /></div> 
        </div>
        </div>
              <Navbar />

        <div className="pro">Projects</div>

      <div className="central">      
        <div className="fix">
        <div className="row1">
        <div className="imgDiv">
            <img className="sec" src={facebook} alt="" />
          </div>

          <div className="page">Facebook Sign up page</div>
          <div className="page1">November, 2023</div>  
          {/* <button className="page2">See more...</button>       */}
        </div>

        <div className="row2">
        <div className="imgDiv">
            <img className="sec" src={linkedin} alt="" />
          </div>

          <div className="page">LinkedIn Sign up page</div>
          <div className="page2">February, 2024</div>
          {/* <button className="page2">See more...</button>          */}
        </div>
        </div>

        <div className="fix">
        <div className="row3">
        <div className="imgDiv1">
            <img className="sec" src={completeweb} alt="" />
          </div>

          <div className="page">A Responsive Website with Pricing for Services</div>
          <div className="page4">May, 2024</div>  
        </div>

        <div className="row4">
        <div className="imgDiv1">
            <img className="sec" src={emmerson} alt="" />
          </div>

          <div className="page">My Portfolio with sample from Behance.net Gallery</div>
          <div className="page4">November, 2024</div>
          {/* <button className="page2">See more...</button>        */}
        </div>
        </div>

        <div className="fix">
        <div className="row5">
        <div className="imgDiv1">
            <img className="sec" src={cryptoweb} alt="" />
          </div>

          <div className="page">A Cryptocurrency Website</div>
          <div className="page5">May, 2024</div>  
          {/* <button className="page2">See more...</button>   */}
        </div>

        <div className="row6">
        <div className="imgDiv1">
            <img className="sec" src={microgpt} alt="" />
          </div>

          <div className="page">Replica of Microgpt.io Homepage</div>
          <div className="page6">November, 2024</div>
          {/* <button className="page2">See more...</button>          */}
        </div>
        </div>

        </div>
      
        </div>

        {!toggle ? 
                <div className="navbar2">
                  <div className="nav">
                    <div className="xmark1"><FontAwesomeIcon className="xmark" onClick={closeModal} icon={faXmark} /></div>
                    <ul className='back'>
                  <a className='back1' href='/'><li>HOME</li></a>
                  <a className='back1' href='./about'><li>ABOUT</li></a>
                  <a className='back1' href='./project'><li>PROJECTS</li></a>
                  <a className='back1' href='./contact'><li>CONTACT</li></a>
                </ul>
                  </div>
                </div>
                : ''}
        </div>
    )
}

export default Project;