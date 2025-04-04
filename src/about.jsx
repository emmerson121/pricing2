import React, { useState } from "react";
import './styles.css';
import Navbar from "./navbar";
import flower from './img/flower.png';
import cover3 from './img/cover3.jpg';
import blue from './img/blue.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const About = () => {
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
        <a className="home" href="/"><div className="icon">      
        <div className='main-image'><img className='image' src={cover3} alt=''/></div>
        <div className='name'>Ebiefie Emmerson</div> 
        </div></a>     
        <div className="bar"><FontAwesomeIcon onClick={toggleModal} icon={faBars} /></div> 
        </div>
        </div>
              <Navbar />
        {/* <div className='navbar'>
        <div className='icon'>
          <div className='main-image'><img className='image' src={cover3} alt=''/></div>
          <div className='name'>Ebiefie Emmerson</div> 
          <div><FontAwesomeIcon icon={faBars} /></div>          
        </div>

        <ul className='list'>
          <a className='list1' href='/'><li>HOME</li></a>
          <a className='list1' href='./about'><li>ABOUT</li></a>
          <a className='list1' href='./project'><li>PROJECTS</li></a>
          <a className='list1' href='./contact'><li>CONTACT</li></a>
        </ul>
        </div> */}
      
      <div className="fixed">
      <div className="about">
      <div className="about1">About Emmerson</div>
        <div className="web">I'm a Front-End Web Developer who's passionate about creativity and contributing to the success of innovative projects.</div>
      </div>

<div className="data">
      <div className="data1">Having being in the tech space for some years, I've 
        come across several projects, connected with leading 
        minds, and personalities. All of these 
        has helped to shape me, provide me with the necessary 
        experiences, and help me explore various branches in 
        programming.</div>
</div>

  <div className="skills">
      <div className="skill">My Skills</div>
            <p className="para">For an effective and responsive website, I'm proficient at utilizing:</p>
            <ul className="exp">
              <li className="exp1"><FontAwesomeIcon icon={faArrowRight} /> HTML</li>
              <li className="exp1"><FontAwesomeIcon icon={faArrowRight} /> CSS</li>
              <li className="exp1"><FontAwesomeIcon icon={faArrowRight} /> JavaScript</li>
              <li className="exp1"><FontAwesomeIcon icon={faArrowRight} /> React</li>
            </ul>
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

export default About;