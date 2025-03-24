import React, { useState, useEffect } from "react";
import './styles.css';
import Navbar from "./navbar";
import flower from './img/flower.png';
import cover3 from './img/cover3.jpg';
import blue from './img/blue.png';
import back from './img/back.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/fontawesome-free-solid";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin, faSquareInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const [toggle, setToggle] = useState(true);
  const toggleModal = () => {
    setToggle(!toggle);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setToggle(true);
    document.body.style.overflow = "auto";
  };



  // const scroll = () =>
    // useEffect(() => {
    //   if (toggle) {
    //     // Disable scrolling on body when modal is open
    //     document.body.style.overflow = "hidden";
    //   } else {
    //     // Re-enable scrolling when modal is closed
    //     document.body.style.overflow = "auto";
    //   }
  
    //   // Cleanup on component unmount or when isOpen changes
    //   return () => {
    //     document.body.style.overflow = "auto";
    //   };
    // }, [toggle]);
  
    // if (!toggle) return null;
  

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

      <div className="myForm">
        <div className="touch">
          <div>Get in touch here</div>
        </div>

        <form className="wrap">
          <div className="formControl">
          <div className="newform">
          <input type="text" placeholder="Enter name" />
          </div>
          

          <div className="newform">
          <input type="email" placeholder="Enter email" />
          </div>

          <div className="newform">
          <input type="number" placeholder="Phone" />
          </div>

          <div className="">
          <textarea className="area">Enter message...</textarea>
          </div>

          <button>Submit</button>
          </div>
        </form>
      </div>

      <div className="mycontact">
      <div className="contact">Place a call: +2348103813014, +2348121860661</div>
      <div className="mail">email: emmanuelebiefie7@gmail.com</div>
      </div>
        </div>
 
        {!toggle ? 
        <div className="navbar2">
          <div className="nav">
            <div className=""><FontAwesomeIcon className="xmark" onClick={closeModal} icon={faXmark} /></div>
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

export default Contact;