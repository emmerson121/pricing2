import React, { useState } from "react";
import './styles.css';
import Navbar from "./navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import flower from './img/flower.png';
// import blue from './img/blue.png';
import cover3 from './img/cover3.jpg';
import adane from './img/adanetech.png';
import marat from './img/marat.png';
// import facebook from './img/facebook.png';
// import linkedin from './img/linkedin.png';
import emmerson from './img/emmerson.png';
import microgpt from './img/microgpt.png';
import completeweb from './img/completeweb.png';
import cryptoweb from './img/cryptoweb.png'; 
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Project = () => {
  const [toggle, setToggle] = useState(true);
  const [imgShow1, setImgShow1] = useState(true);
  const [imgShow2, setImgShow2] = useState(true);
  const [imgShow3, setImgShow3] = useState(true);
  const [imgShow4, setImgShow4] = useState(true);
  const [imgShow5, setImgShow5] = useState(true);
  const [imgShow6, setImgShow6] = useState(true);
  const [imgPop, setImgPop] = useState(false);
  const [name, setName] = useState('Adane Technology');

    const toggleModal = () => {
      setToggle(!toggle);
      document.body.style.overflow = "hidden";
    };
  
    const closeModal = () => {
      setToggle(true);
      document.body.style.overflow = "auto";
    };

    const projectInfo = [
      {projectTitle: 'Adane Technology', projectImg: adane, projectDate: 'November, 2023'},
      {projectTitle: 'Marat Education Platform', projectImg: marat, projectDate: 'February, 2024'},
      {projectTitle: 'A Responsive Website with Pricing for Services', projectImg: emmerson, projectDate: 'May, 2024'},
      {projectTitle: 'My Portfolio with sample from Behance.net Gallery', projectImg: microgpt, projectDate: 'October, 2024'},
      {projectTitle: 'A Cryptocurrency Website', projectImg: cryptoweb, projectDate: 'February, 2025'},
      {projectTitle: 'Replica of Microgpt.io Homepage', projectImg: cryptoweb, projectDate: 'April, 2025'}
    ]

    const imgFilter = () =>{
      {projectInfo.map().filter((app) =>(
        <div>
          app.projectTitle
        </div>
      ))}
    }
  
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

        <div className="pro">Projects</div>

      <div className="central">      
      <div className="roller">
        <div className="row3">
        <div className="imgDiv1">
            <img className="sec" src={adane} alt="" />
          </div>
 
{/* {!imgShow1 ? 
        <div className="imgDetails">
          <div className="page">Adane Technology</div>
          <div className="page1">November, 2023</div>  
          </div>
  : ''} */}
        </div>

        <div className="row3">
        <div className="imgDiv1" >
            <img className="sec" src={marat} alt="" />
          </div>

{/* {!imgShow2 ? 
          <div>
          <div className="page">Marat Educational Platform</div>
          <div className="page2">February, 2024</div>
          </div>
        : ''} */}

          </div>

    
        <div className="row3">
        <div className="imgDiv1">
            <img className="sec" src={completeweb} alt="" />
          </div>

{/* {!imgShow3 ? 
        <div>
          <div className="page">A Responsive Website with Pricing for Services</div>
          <div className="page4">May, 2024</div> 
        </div> 
        : ''} */}
        </div>
        
        <div className="row3">
        <div className="imgDiv1">
            <img className="sec" src={emmerson} alt="" />
          </div>

{/* {!imgShow4 ? 
        <div>
          <div className="page">My Portfolio with sample from Behance.net Gallery</div>
          <div className="page4">November, 2024</div>
        </div>
        : ''} */}
        </div>
  
        <div className="row3">
        <div className="imgDiv1">
            <img className="sec" src={cryptoweb} alt="" />
          </div>

          {/* <div className="page">A Cryptocurrency Website</div>
          <div className="page5">May, 2024</div>   */}
          {/* <button className="page2">See more...</button>   */}
        </div>

        <div className="row3">
        <div className="imgDiv1">
            <img className="sec" src={microgpt} alt="" />
          </div>

          {/* <div className="page">Replica of Microgpt.io Homepage</div>
          <div className="page6">November, 2024</div> */}
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

{imgPop ? 
                <div className="imgContainer">
                  <div className="imgContainer1">
                    <div className="imgContainer2">
                      <img src={adane} alt="" />
                    </div>

                    <div className="imgDetails imgInfo">
              <div className="page">Adane Technology</div>
              <div className="page1">November, 2023</div>  
          </div>
                  </div>
                </div>

              : ''}
        </div>
    )

}

export default Project;