import React, { useState, useEffect, StrictMode } from "react";
import axios from 'axios';
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
  const [formData, setFormData] = useState({name: '', email: '', number: '', message: ''});
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [emailStatement, setEmailStatement] = useState('');
  const [phoneStatement, setPhoneStatement] = useState('');
  const [messageStatement, setMessageStatement] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [number1, setNumber1] = useState(formData.number);
  const [errorMessage4, setErrorMessage4] = useState('');
  const [showModal, setShowModal] = useState(false);
  // const [error9, setError9] = useState('');
  // const [success9, setSuccess9] = useState(false);
  // const [modarSuccess, setModarSuccess] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const [errors1, setErrors1] = useState('');
  const [errors2, setErrors2] = useState('');
   const [errors3, setErrors3] = useState('');
   const [errors4, setErrors4] = useState('');
   
  //  setModarSuccess(true);

  const toggleModal = () => {
    setToggle(!toggle);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setToggle(true);
    document.body.style.overflow = "auto";
  };

  const onChangeHandler = (e) =>{
     const { name, value, } = e.target;

    setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
        console.log(formData)
        let errorMessage = '';
        let errorMessage1 = '';
        let errorMessage2 = '';

    if(name === 'name'){
      if (value.trim() === '') {
        errorMessage = 'Name is required';
      }
      else if(value.length <= 5){
        errorMessage = 'Name must not be less than 6 characters';
      }

    }

    if(name === 'email') {
      if(validator.isEmail(formData.email) !== true) {
        errorMessage1 = 'Invalid email address';
      } else if(value.trim() === '') {
        errorMessage1 = 'Email is required';
      }
    }
    
    if(name === 'number'){
      if (/^\d*$/.test(value)) {
      setNumber1(value);
    }

    if(validator.isMobilePhone(value, 'en-NG')){
    errorMessage2 = ''
  }
  else{
    errorMessage2 = 'Invalid phone number';
  }
  }

    setErrors1(errorMessage);
    setErrors2(errorMessage1);
    setErrors3(errorMessage2);
    

    // setErrors((prevErrors) => ({
    //   ...prevErrors,
    //   [name]: errorMessage,
    // }));
  }

const submitButton = async (e) => {
  e.preventDefault();

  const { name, email, number, message } = formData;
  
  try{
    if(!name || !email || !number || !message){
    const intervalId = setInterval(() => {
      setErrorMessage4('All fields are required.');
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  setErrorMessage4('');
}, 3000); // Stops after 5 seconds

      
  } else if(!validator.isMobilePhone(number, 'en-NG')){ 
    const intervalId = setInterval(() => {
      setErrorMessage4('Invalid phone number.');
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  setErrorMessage4('');
}, 3000); // Stops after 5 seconds

  } else if(!validator.isEmail(email)){
    const intervalId = setInterval(() => {
      setErrorMessage4('Invalid email address.');
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  setErrorMessage4('');
}, 3000); // Stops after 5 seconds
   
  } 
  else{
    const response = await axios.post(
      'https://portfolioserver-ngna.onrender.com/forms',
      formData
    );
    console.log('Success:', response.data);
    setSuccess('Thanks for your response');
    setError(''); // Clear previous error
  } 
  } catch (error) {
    console.error('Submission Error:', error);
    setError('Something went wrong. Please try again.');
    setSuccess(''); // Clear success message on error
  }

  setTimeout(() => {
      setShowModal(true);

      // Hide modal after 3 seconds
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
      setFormData(
    {name: '', email: '', number: '', message: ''}
  )
    }, 1000);
 
    // window.location.reload();
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

      <div className="myForm">
        <div className="touch">
          <div>Get in touch here</div>
        </div>

      <div className="wrap1">
        <form className="wrap">
          <div className="formControl">
          <div className="">
          <input className="newform" type="text" value={formData.name} placeholder="Enter name" name="name" onChange={onChangeHandler}/>
          {errors1 && <div className="err" id="name">{errors1}</div>}
          </div>
          

          <div className="">
          <input className="newform" type="email" placeholder="Enter email" value={formData.email} name="email" onChange={onChangeHandler}/>
          {errors2 && <div className="err" id="email">{errors2}</div>}
          </div>

          <div className="">
          <input className="newform" type="tel" maxLength={11} placeholder="Phone" value={number1} name="number" onChange={onChangeHandler}/>
          {errors3 && <div className="err" id="number">{errors3}</div>}
          </div>

          <div className="">
          <textarea className="area" placeholder="Enter message..." value={formData.message} name="message" onChange={onChangeHandler}></textarea>
          <div className="err" id="message">{messageStatement}</div>
          </div>

          <div className="butt">
          <button className="butt1" id="send" value={formData} onClick={submitButton}>Submit</button>
          {errorMessage4 && <div className="err2">{errorMessage4}</div>}
          </div>

          </div>
        </form>
        </div>
      </div>

      <div className="mycontact">
        <div className="icon1">
          <div className='phone1'><svg className="device1" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path d="M22.4999 16.9201V19.9201C22.5011 20.1986 22.444 20.4743 22.3324 20.7294C22.2209 20.9846 22.0572 21.2137 21.852 21.402C21.6468 21.5902 21.4045 21.7336 21.1407 21.8228C20.8769 21.912 20.5973 21.9452 20.3199 21.9201C17.2428 21.5857 14.2869 20.5342 11.6899 18.8501C9.27376 17.3148 7.22527 15.2663 5.68993 12.8501C3.99991 10.2413 2.94818 7.27109 2.61993 4.1801C2.59494 3.90356 2.62781 3.62486 2.71643 3.36172C2.80506 3.09859 2.9475 2.85679 3.1347 2.65172C3.32189 2.44665 3.54974 2.28281 3.80372 2.17062C4.05771 2.05843 4.33227 2.00036 4.60993 2.0001H7.60993C8.09524 1.99532 8.56572 2.16718 8.93369 2.48363C9.30166 2.80008 9.54201 3.23954 9.60993 3.7201C9.73656 4.68016 9.97138 5.62282 10.3099 6.5301C10.4445 6.88802 10.4736 7.27701 10.3938 7.65098C10.3141 8.02494 10.1288 8.36821 9.85993 8.6401L8.58993 9.9101C10.0135 12.4136 12.0864 14.4865 14.5899 15.9101L15.8599 14.6401C16.1318 14.3712 16.4751 14.1859 16.8491 14.1062C17.223 14.0264 17.612 14.0556 17.9699 14.1901C18.8772 14.5286 19.8199 14.7635 20.7799 14.8901C21.2657 14.9586 21.7093 15.2033 22.0265 15.5776C22.3436 15.9519 22.5121 16.4297 22.4999 16.9201Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>    
        <div className="contact">+2348103813014, +2348121860661</div>
        </div>
      
      <div className="icon2">
        <div className='phone1'><div className='icon18'><svg className="device1" width="25" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z" fill="#000" strokeWidth=''/>
</svg></div>

      </div> 
      <div className="mail">emmanuelebiefie7@gmail.com</div>
      </div>
      </div>

      <div>
      <div className='social1'>
        <div><a className='social3' href='https://github.com/emmerson121'><FontAwesomeIcon icon={faGithub} /></a></div>
          <div><a className='social3' href='https://ng.linkedin.com/in/emmanuel-ebiefie-51522625a'><FontAwesomeIcon icon={faLinkedin} /></a></div>
          <div><a className='social3' href='https://twitter.com/emmerson017'><FontAwesomeIcon icon={faXTwitter} /></a></div>
          <div><a className='social3' href='https://youtube.com/@emmerson017'><FontAwesomeIcon icon={faYoutube} /></a></div>
          <div><a className='social3' href='https://www.facebook.com/emmerson.ebiefie'><FontAwesomeIcon icon={faFacebook} /></a></div>
          <div><a className='social3' href='https://www.instagram.com/emmerson150/'><FontAwesomeIcon icon={faSquareInstagram} /></a></div>
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

        {success && showModal &&
        <div className="response1">
          <div className="response">
          <div className="success">
            <svg className="success1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z"/></svg>
            </div>
            <div className="reach">Thank you for reaching out!</div>
          </div>
        </div>
        }
        </div>
    )
}

export default Contact;