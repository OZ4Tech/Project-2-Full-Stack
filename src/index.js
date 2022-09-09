import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Homepage from "./pages/Homepage"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <Router>
            <Routes>
            <Route path='/'element={<App/>}/>
            <Route path='/signup'element={<Signup/>}/>
            <Route path='/login'element={<Login/>}/>
            <Route path='/about'element={<About/>}/>
            <Route path='/homepage'element={<Homepage/>}/>
            </Routes>
      </Router>,
    
    );
    
    export default App;   
