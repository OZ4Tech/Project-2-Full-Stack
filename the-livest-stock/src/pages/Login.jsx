import React, { useState } from 'react';
import "./Login.css"


const Login = () => {
  const [popupStyle, showPopup] = useState("hide")
  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 40000)
  }
  return (
    <><li>
      <a href="../">Home</a>
    </li><div className="cover">
        <h1>Login</h1>
        <input className="text" placeholder="Username" />
        <input className="password" placeholder="Password" />


        <div className='login-btn' onClick={popup}>Login</div>
        <div className={popupStyle}>
          <h3>Login Unsuccessful</h3>
          <p>Username And/Or Password Incorrect</p>
        </div>


      </div></>
  );
}

export default Login;