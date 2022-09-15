import '../css/style.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react'; 
import imglogin from '../img/logo technopartner.png';


function Navbar() {
    const [isLogin, SetIsLogin] = useState(false);
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (token) {
          SetIsLogin(true);
        } else {
          SetIsLogin(false);
        }
      }, []);
  
return (
    <div className='login'>
            {isLogin ? (
                   <nav class="navbar bg-light">
                   <div class="container">
                     <a class="navbar-brand" href="#">
                       <img src={imglogin} alt="Bootstrap" width="130" height="60"/>
                     </a>
                   </div>
                 </nav>
            ):(
                <div></div>
            )}
 
    </div>
  );
}

export default Navbar;

