import React from 'react';
import Navbar from "./components/Navbar";
import Background from "./assets/bulls2.mp4";


function App() {
  return (

    <div className='App'>
        <video autoPlay muted loop id="myVideo">
          <source src={Background} type="video/mp4"></source>
        </video>
        <Navbar />

      </div>
  );
}

export default App;