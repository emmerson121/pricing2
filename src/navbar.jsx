import React from 'react';
import './styles.css';
import cover3 from './img/cover3.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return(
        <div>
            <div className="navbar">
        <div className='icon'>
          <div className='main-image'><img className='image' src={cover3} alt=''/></div>
          <div className='name'>Ebiefie Emmerson</div>       
        </div>
        

        <ul className='list'>
          <a className='list1' href='/'><li>HOME</li></a>
          <a className='list1' href='./about'><li>ABOUT</li></a>
          <a className='list1' href='./project'><li>PROJECTS</li></a>
          <a className='list1' href='./contact'><li>CONTACT</li></a>
        </ul>
        </div>
        </div>
    )
}

export default Navbar;