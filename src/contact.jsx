import React, { useState, useEffect } from "react";
import './styles.css';
import validator from 'validator';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [emailStatement, setEmailStatement] = useState('');
  const [phoneStatement, setPhoneStatement] = useState('');
  const [messageStatement, setMessageStatement] = useState('');
  const [error, setError] = useState('');
  const [toggle, setToggle] = useState(true);
  const toggleModal = () => {
    setToggle(!toggle);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setToggle(true);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e) =>{
    setName(e.target.value);
    if(name === ''){
      setError('Name cannot be empty');
    }
    else if(name.length <= 5){
      setError('Must not be less than 6 characters');
    }
    else{
      setError('');
    }
    
  }

  const submitButton = () =>{
    if(name.length === 0 ){
      setError('Name field cannot be empty');
    }
    else if(email.length === 0 ){
      setEmailStatement('Email field cannot be empty');
    }
    else if(number.length === 0 ){
      setPhoneStatement('This field cannot be empty')
    }
    else if(message.length === 0 ){
      setMessageStatement('This field cannot be empty');
    }
    else if(name.length <= 5){
      setError('Name must not be less than 6 characters');
    }
    else if(validator.isEmail(email) !== true){
      setEmailStatement('Invalid email format');
    }
    else{ }
  }

  const handleSubmit1 = (e) =>{
    setEmail(e.target.value);
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(validator.isEmail(email) == true){
      setEmailStatement('')
    }else{
      setEmailStatement('Invalid email, please input a valid email');
    }
  }

  const handleSubmit2 = (e) =>{
    setNumber(e.target.value);
    if(number.length == 0 ){
      setPhoneStatement('Phone number must not be empty');
    }
    else if(number.length <= 9 ){
      setPhoneStatement('Number must not be less than 10');
    }
    else{
      setPhoneStatement('')
    }
  }

  const handleSubmit3 = (e) =>{
    setMessage(e.target.value);
    if(message.length <= 5 ){
      setMessageStatement('Must contain at least 6 characters');
    }
    else if(message.length >= 0 ){
      setMessageStatement('');
    }
  }

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
        <a className="home" href="/"><div className="icon">
        <div className='main-image'><img className='image' src={cover3} alt=''/></div>
        <div className='name'>Ebiefie Emmerson</div> 
        </div></a>      
        <div className="bar"><FontAwesomeIcon onClick={toggleModal} icon={faBars} /></div> 
        </div>
        </div>
        <Navbar />

      <div className="myForm">
        <div className="touch">
          <div>Get in touch here</div>
        </div>

      <div className="wrap1">
        <form className="wrap">
          <div className="formControl">
          <div className="">
          <input className="newform" type="text" placeholder="Enter name" onChange={handleSubmit}/>
          <div className="err" id="name">{error}</div>
          </div>
          

          <div className="">
          <input className="newform" type="email" placeholder="Enter email" onChange={handleSubmit1}/>
          <div className="err" id="email">{emailStatement}</div>
          </div>

          <div className="">
          <input className="newform" type="number" placeholder="Phone" onChange={handleSubmit2}/>
          <div className="err" id="number">{phoneStatement}</div>
          </div>

          <div className="">
          <textarea className="area" placeholder="Enter message..." onChange={handleSubmit3}></textarea>
          <div className="err" id="message">{messageStatement}</div>
          </div>

          <div className="butt">
          <div className="butt1" id="send" onClick={submitButton}>Submit</div>
          </div>

          </div>
        </form>
        </div>
      </div>

      <div className="mycontact">
      <div className="contact">Place a call: +2348103813014, +2348121860661</div>
      <div className="mail">email: emmanuelebiefie7@gmail.com</div>
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

export default Contact;