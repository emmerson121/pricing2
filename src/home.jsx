import React, { useState } from "react";
import './styles.css';
import Navbar from "./navbar";
import About from "./about";
// import coloured from './img/coloured.png';
import flower from './img/flower.png';
import cover3 from './img/cover3.jpg';
import blue from './img/blue.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin, faSquareInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
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
        {/* <div className='navbar'>
          <div className="navbar1">
        <div className='icon'>
          <div className='main-image'><img className='image' src={cover3} alt=''/></div>
          <div className='name'>Ebiefie Emmerson</div>
        </div>
      </div>
        <ul className='list'>
          <a className='list1' href='/'><li>HOME</li></a>
          <a className='list1' href='./about'><li>ABOUT</li></a>
          <a className='list1' href='./project'><li>PROJECTS</li></a>
          <a className='list1' href='./contact'><li>CONTACT</li></a>
        </ul>
        </div> */}
        
      
      
      <div className='contents'>
        <div className='social'>
        <div><a className='socials' href=''><FontAwesomeIcon icon={faGithub} /></a></div>
          <div><a className='socials' href=''><FontAwesomeIcon icon={faLinkedin} /></a></div>
          <div><a className='socials' href=''><FontAwesomeIcon icon={faXTwitter} /></a></div>
          <div><a className='socials' href=''><FontAwesomeIcon icon={faYoutube} /></a></div>
          <div><a className='socials' href=''><FontAwesomeIcon icon={faFacebook} /></a></div>
          <div><a className='socials' href=''><FontAwesomeIcon icon={faSquareInstagram} /></a></div>
        </div>

        <div className='profile'>
          <h2 className='name1'>Hey, I'm Ebiefie Emmerson</h2>
          <div className="able">
          <div className='abilities'>A Front-End centered Web Developer building the Front-End of Websites and 
            Web Applications that results to the success of the overall performance.</div>
        </div>
        </div>
      </div>

      <div className='projects'>
      <button className='project'><a className="proj" href="./project">PROJECTS</a></button>
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

export default Home;