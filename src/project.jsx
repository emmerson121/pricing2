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
  const [imgPop, setImgPop] = useState(null);
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
      {projectTitle: 'A Responsive Website with Pricing for Services', projectImg: completeweb, projectDate: 'May, 2023', projectName: 'Visit project', projectLink: 'https://mayweb.vercel.app/'},
      {projectTitle: 'Adane Technology', projectImg: adane, projectDate: 'March, 2025', projectName: 'Visit project', projectLink: 'https://adiele.vercel.app'},
      {projectTitle: 'Marat Education Platform', projectImg: marat, projectDate: 'February, 2024', projectName: 'Visit project', projectLink: 'https://neyenwa.vercel.app'},
      {projectTitle: 'My Portfolio with sample from Behance.net Gallery', projectImg: emmerson, projectDate: 'October, 2024', projectName: 'Visit project', projectLink: 'https://personalportfolio-beta-liart.vercel.app/'},
      {projectTitle: 'A Cryptocurrency Website', projectImg: cryptoweb, projectDate: 'February, 2025', projectName: 'Visit project', projectLink: ''},
      {projectTitle: 'Replica of Microgpt.io Homepage', projectImg: microgpt, projectDate: 'April, 2025', projectName: 'Visit project', projectLink: ''}
    ]

    // const imgFilter = () =>{
    //   {projectInfo.map().filter((app) =>(
    //     <div>
    //       app.projectTitle
    //     </div>
    //   ))}
    // }
  
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

        {projectInfo.map((app) =>(
        <div className="row3" key={app}>
        <div className="imgDiv1">
            <img className="sec" src={app.projectImg} alt="" onClick={() => setImgPop(app)} />
          </div>
        </div>
        ))}

        {/* <div className="row3">
        <div className="imgDiv1" >
            <img className="sec" src={marat} alt="" />
          </div>
          </div> */}

    
        {/* <div className="row3">
        <div className="imgDiv1">
            <img className="sec" src={completeweb} alt="" />
          </div>
        </div> */}
        
        {/* <div className="row3">
        <div className="imgDiv1">
            <img className="sec" src={emmerson} alt="" />
          </div>
        </div> */}
  
        {/* <div className="row3">
        <div className="imgDiv1">
            <img className="sec" src={cryptoweb} alt="" />
          </div>
        </div> */}

        {/* <div className="row3">
        <div className="imgDiv1">
            <img className="sec" src={microgpt} alt="" />
          </div>
        </div> */}
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

        {imgPop && 
          <>
                <div className="imgContainer" onClick={() =>setImgPop(null)}>
                  
                </div>
  
                <div className="imgContainer1">
                    <div className="imgContainer2">
                      <img src={imgPop.projectImg} alt="" />
                    </div>

                    <div className="imgDetails imgInfo">
              <div className="page">{imgPop.projectTitle}</div>
              <div className="page1">{imgPop.projectDate}</div> 
              <div className="linkInfo">
              <a className="linkDetails" href={imgPop.projectLink}>
              {imgPop.projectName}
              <svg className="arrowImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M98.9 114.6C91.5 130.6 98.5 149.7 114.5 157.1L467.6 320L114.6 483C98.6 490.4 91.5 509.4 99 525.5C106.5 541.6 125.4 548.5 141.5 541.1L557.5 349.1C568.8 343.9 576.1 332.5 576.1 320C576.1 307.5 568.8 296.2 557.5 290.9L141.4 99C125.4 91.6 106.3 98.6 98.9 114.6z"/></svg>
              <svg className="arrowImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M98.9 114.6C91.5 130.6 98.5 149.7 114.5 157.1L467.6 320L114.6 483C98.6 490.4 91.5 509.4 99 525.5C106.5 541.6 125.4 548.5 141.5 541.1L557.5 349.1C568.8 343.9 576.1 332.5 576.1 320C576.1 307.5 568.8 296.2 557.5 290.9L141.4 99C125.4 91.6 106.3 98.6 98.9 114.6z"/></svg>
              </a>
              </div>
          </div>
                  </div>
                  </>

              }
        </div>
    )

}

export default Project;