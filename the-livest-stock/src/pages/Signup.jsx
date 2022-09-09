import React, { useState } from 'react';
import "../pages/Signup.css"

const Signup = () => {
  const [popupStyle, showPopup] = useState("hide")
  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 40000)
  }
  return (
    <div className="cover-s">
        <h1>Signup</h1>
        <li>
                        <a href="../">Home</a>
        </li>
        <input className="text" placeholder="Username"/>
        <br></br>
        <input className="email" placeholder="Email Address"/>
        <br></br>
        <input className="password" placeholder="Enter Password"/>
        <br></br>
        <input className="passwordagain" placeholder="Re-Enter Password"/>
        <br></br>
        <div className='login-btn' onClick={popup}>Login</div>
        <div className={popupStyle}>
            <h3>Signup Unsuccessful</h3>
            <p>Username And/Or Password Already Exists</p>
        </div>
        
    </div>
  );
}

export default Signup;