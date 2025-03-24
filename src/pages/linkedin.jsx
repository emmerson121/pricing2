import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './pages/socials.css'
import image3 from './img/image3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brand-svg-icons'
// import { faGoogle } from '@fortawesome/fontawesome-free-solid'
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

function LinkedIn() {
  const [input, setInput] = useState({
    email: 'email',
    password: 'password'
  })

  const handleChange = (e) => {
    setInput((prev) =>({
      ...prev, [e.target.name] : e.target.value
    })
  )}
  console.log(input)

  const submitButton = (e) => {
    e.preventDefault()
  }
  
  return (
    <div>
      <div className='img'>
        <img className='image' scr={image3} alt='' />
      </div>

      <div className='container'>
      <form className='form'>
        <div>
          <div className=''>
            <div className='signin'>Sign in</div>
          </div>
          
          <div className='formControl'>
            <div className=''>
          <div className='gog'><FontAwesomeIcon className='google' icon={faGoogle} />Continue with Google</div>
          </div>
          </div>

          <div className='formControl'>
          <div className='gog'><FontAwesomeIcon className='apple' icon={faApple} />Sign in with Apple</div>
          </div>

          <div>
            <div className='or'>or</div>
          </div>

          <div className='formControl'>
            <input type="text" placeholder='Email or phone' onChange={handleChange} name='email' />
          </div>

          <div className='formControl'>
            <input type="password" placeholder='Password' onChange={handleChange} name='password' />
          </div>

          <div>
            <a className='anchor' href=''>Forgot password?</a>
          </div>

          <div className='logged'>
            <div className='central'>
            <input className='check' type='checkbox' />
            <div className='loggedIn'>Keep me logged in</div>
            </div>
          </div>

          <div>
            <button className='formControl1' onClick={submitButton}>Sign in</button>
          </div>
        </div>
      </form>
    </div>

     <div className='join-now'>New to LinkedIn? <a className='join' href=''>Join now</a></div>
    </div>
  );
}

export default LinkedIn;
