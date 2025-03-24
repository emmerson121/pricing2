// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './pages/socials.css';
import { createContext, useState, } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Facebook from './login';
// import Component1 from './component';

// const MainText = createContext()

function App() {
  const [input, setInput] = useState({
    email: 'email',
    password: 'password'
  })

  const handleChange = (e) => {
    setInput((prev) =>({
      ...prev, [e.target.name] : e.target.value
    })
  )
}
console.log(input)
  

  const submitButton = (e) => {
    e.preventDefault()
  }

 
  return (
    <div>
      <div className='header'>
        <h2>facebook</h2>
        </div>
        <div className='main'>
      <div className='container'>
    
        <form action='' className='form1'>
        
        <div className='log'>Log in to Facebook</div>
        <div className='formControl'>
          <input type='text' className='inputTag' placeholder='Email address or phone number' onChange={handleChange} name='email'/>
         </div>

         <div className='formControl' >
          <input type='password' placeholder='Password' onChange={handleChange} name='password' />
         </div>

         <div className='formControl'>
            <button className='formControl button' onClick={submitButton}>Login</button>
        </div>

          <div><a className='forgot' href='https://www.facebook.com/recover/initiate/?ars=facebook_login&cancel_lara_pswd=0'>Forgotten account?</a></div>

          <div className='or'>or</div>

          <div className='new'>
            <a className='new' href='https://en-gb.facebook.com/r.php?locale=en_GB&display=page'>Create new account</a>
          </div>

        </form>
      </div>
      </div>
      </div>
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path='./login' element={<Facebook />} /> */}
    //     {/* <Route path='./component' element={<Component1/>} /> */}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
