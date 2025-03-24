import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
// import logo from './logo.svg';
// import './App.css';
import cover from './img2/cover.JPG';
import snap1 from './img2/snap1.png'
import snap2 from './img2/snap2.png'
import snap3 from './img2/snap3.png'
import snap4 from './img2/snap4.png'
import snap5 from './img2/snap5.png'
import snap6 from './img2/snap6.png'
import snap7 from './img2/snap7.png'
import snap8 from './img2/snap8.png'
import snap9 from './img2/snap9.png'
import discord from './img2/discord.jpg';
import twitter from './img2/twitter.png';
import insta from './img2/insta2.jpg';
import facebook from './img2/facebook1.png';
import youtube from './img2/youtube.jpg';
import telegram from './img2/facebook1.png';

function Behance() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className='container'>
      <div className='fixedWidth'>
        <div className='navBar'>
        <div className='name'>Ebiefie Emmerson</div>
        {/* <div className='bar'><FontAwesomeIcon onClick={() => setToggle(!toggle)} className='fbars' icon={faBars} /></div> */}
      </div>   
      <div className='main2'>
      <div className='main'>
        <div className='nav'>
          <ul className='list'>
            <li><a href='/'>Home</a></li>
            <li><a href='#proj'>Project</a></li>
            <li><a href='#bLog'>Blog</a></li>
            <li><a href='#conTact'>Contact</a></li>
          </ul>
        </div>
        <div className='navEnd'>
          <ul className='rightEnd'>
            <li><button className='but1'>Light or Dark</button></li>
            <li><a href='#conTact'><button className='but2'>Contact me</button></a></li>
          </ul>
        </div>
      </div>
      </div>
  </div>

    <div className='wrapper'>
      <div className='backcolor'></div>
    <div className='details'>
    <div className='stack'>Front-End Web Developer</div>
      <div className='name1'>Ebiefie Emmerson</div>
      <div>
      <p className='lilText'>I'm a Front-End Web Developer and I work remotely from Nigeria</p>
      </div>
      <div className='main3'></div>
    </div>
    <div className='wrap'>
      <div className='emm'>
      <img className='image' src={cover} alt='images' />
      </div>
    </div>
    </div>

    
      
    {/* About Us section */}
    <div className='gen'>
      <div className='snap9'>
        <div className='aboutM'>
      <img className='aboutImg' src={snap9} alt='' />
        </div>
      </div>
      <div className='aboutMe'>
    <div className='about'>About me</div>

    <p className='para'>Lorem Ipsum refers to text that the DTP (Desktop Publishing) industry use as replacement text when the real text is not available. For example, when designing a brochure or book, a designer will insert Lorem ipsum text if the real text is not available.</p>
    <div className='parent'>
    <a href='#conTact'><button className='but3'>Contact me</button></a>
    </div>
      </div>
    </div>
    
  

  <div className='skill'>
    <h1 className='ms'>My Skills</h1>
  </div>
<div className='items'>
<div className=''></div>
    <ul className='package'>
      <li><div className='dot1'><span className='csColour'>CSS</span><div className='dot1'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        </div></div></li>font

        <li><div className='dot1'><span className='csColour'>Tailwind</span><div className='dot1'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        </div></div></li>

       <li><div className='dot1'><span className='csColour'>JavaScript</span><div className='dot1'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        </div></div></li>

        <li><div className='dot1'><span className='csColour'>Angular</span><div className='dot1'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        </div></div></li> 
      </ul>

      <ul className='package'>
      <li><div className='dot1'><span className='csColour'>Lavarel</span><div className='dot1'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        </div></div></li>

        <li><div className='dot1'><span className='csColour'>React</span><div className='dot1'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        </div></div></li>

        <li><div className='dot1'><span className='csColour'>Ruby/Rails</span><div className='dot1'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        </div></div></li>

        <li><div className='dot1'><span className='csColour'>Node.js</span><div className='dot1'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        </div></div></li>
    </ul>
</div>

{/* My projects */}
<div id='proj'>
<div className='pro'>
  <div className='main4'></div>
      <h1 className='project'>My Projects</h1>
    </div>

    <div className='pro1'>
      <div className='snap1'>
      <img className='first' src={snap1} alt='' />
      </div>

      <div className='aug'>Project name<div/>
        <div className='one'>Aug 2022</div>
      </div>
    </div>

    <div className='pro2'>
      <img className='sec' src={snap2} alt='' />

      <div className='aug'>Project name</div> 
      <div className='main5a'>
      <div className='main5'></div>
      <div className='main6'></div>
      </div>
      <div className='one'>May 2022</div>
    </div>

    <div className='pro3'>
      <img className='third' src={snap3} alt='' />

    <div className='aug'>Project name</div>
    <div className='one'>Feb 2022</div>
    </div>

    <div className='pro4'>
      <img className='four' src={snap4} alt='' />

      <div className='aug'>Project name</div>
      <div className='one'>December 2021</div>
    </div>

    <div className='more'>
    <h3>See more projects...</h3>
    </div>
  
  <div className='cover'>
<div id='bLog'>
<div className='blogs'>
  <div className='main7'>
  <div className='main7a'></div>
  <div className='main7b'></div>
  </div>
  <div className='blog'>
    <p>My Blog</p>
  </div>
  </div>
  
    <div className='see'>
      <div className='all'>See all</div>
      </div>
    </div>
    </div>

    <div className='central'>
      <div className='cent'>
      <div className='imgDiv'>
      <img className='five' src={snap5} alt='' />
      </div>
      <div className='react'>React Suspense and React.lazy by example</div>
      <p className='par'>When apps start to grow you can easily end up including too many components making it heavier and slow to laod. One of the solutions to the problem is Code-Splitting and Webpack is probably...</p>
      <button className='read'>Read more...</button>
      </div>

        <div className='cent'>
        <div className='imgDiv'>
      <img className='five' src={snap6} alt='' />
      </div>
      <div className='react'>Managing State with useReducer, useState</div>
      <p className='par'>When apps start to grow you can easily end up including too many components making it heavier and slow to laod. One of the solutions to the problem is Code-Splitting and Webpack is probably...</p>
      <button className='read'>Read more...</button>
      </div>
    </div>

    <div className='central'>
      <div className='cent'>
        <div className='imgDiv'>
      <img className='five' src={snap7} alt='' />
      </div>
      <div className='main8'></div>
      <div className='react'>5 Command Lines Tips and Tricks All Web Developers Should Know</div>
      <p className='par'>When apps start to grow you can easily end up including too many components making it heavier and slow to laod. One of the solutions to the problem is Code-Splitting and Webpack is probably...</p>
      <button className='read'>Read more...</button>
      </div>

<div className='main9'>
  <div className='main9a'></div>
  <div className='main9b'></div>
</div>
      <div className='cent'>
      <div className='imgDiv'>
      <img className='five' src={snap8} alt='' />
      </div>
      <div className='react'>10 Things to Know About ES6 before Learning React JS</div>
      <p className='par'>When apps start to grow you can easily end up including too many components making it heavier and slow to laod. One of the solutions to the problem is Code-Splitting and Webpack is probably...</p>
      <button className='read'>Read more...</button>
      </div>
    </div>

    <div className='contactMe' id='conTact'>
      <div className='contactme'>
    <div className='contact'>
      <div className='con'>
      <h1>Contact Me</h1>
      </div>

      <div>
        <form className='form'>
          <div className='forM'>
          <label>Full name*</label>
          <input className='names' placeholder='Enter your name...'/>
          </div>

          <div className='forM'>
          <label>Email*</label>
            <input placeholder='Enter your email...' />
            </div>

          <div className='forM'>
          <label>Message*</label>
            <textarea placeholder='Enter your message...'></textarea>
            </div>

            <button className='butt'>See all</button>
        </form>
      </div>
    </div>
    </div>
    </div>

<div className='followMe'>
    <div className='folloW'>
      <ul>
        <li className='foL'><span className='fol'>Follow me</span></li>
    <li className='foL'><div className='dot2'>
      <div className='dot3'></div>
      <div className='dot3'></div>
      <div className='dot3'></div>
      <div className='dot3'></div>
      <div className='dot3'></div>
      <div className='dot3'></div>
      <div className='dot3'></div>
      <div className='dot3'></div>
      <div className='dot3'></div>
      <div className='dot3'></div>
      <div className='dot3'></div>
      <div className='dot3'></div>
      <div className='dot3'></div>
      <div className='dot3'></div>
      </div></li>
      </ul>

      <div className='social'>
        <div className='firstLine'>
        <div>
        <img className='soc' src={discord} alt='' />
        </div>

        <div>
        <img className='soc' src={twitter} alt='' />
        </div>

        <div>
        <img className='soc' src={insta} alt='' />
        </div>
        </div>

        <div className='secondLine'>
          <div>
        <img className='soc' src={facebook} alt='' />
        </div>

        <div>
        <img className='soc' src={youtube} alt='' />
        </div>

        <div>
        <img className='soc' src={telegram} alt='' />
        </div>
        </div>
        </div> 
        </div> 
    </div>
    </div>
    {!toggle ? 
    <div className='navbar'>
      <div className='nav1'>
    {/* <div className=''> <div className='xmark'><FontAwesomeIcon onClick={() => setToggle(true)} className='faMark' icon={faXmark} /></div></div> */}
      <ul className='options'>
        <li><a className='alter' href='/'>Home</a></li>
        <li><a className='alter' href='#proj'>Project</a></li>
        <li><a className='alter' href='#bLog'>Blog</a></li>
        <li><a className='alter' href='#conTact'>Contact</a></li>
      </ul>
      </div>
    </div>
    : ''}
    </div>
  );
}

export default Behance;
// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default App;
