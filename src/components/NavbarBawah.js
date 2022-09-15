import '../css/style.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react'; 
import { Link, useLocation  } from 'react-router-dom';
import home from '../img/home2.png';
import menu from '../img/menu2.png';


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
                      <Link class="navbar-brand" to="/dashboard">
                        <img src={home} alt="Bootstrap" width="60" height="60"/>
                      </Link>
                      <Link class="navbar-brand"to="/menu">
                        <img src={menu} alt="Bootstrap" width="50" height="60"/>
                      </Link>
                    </div>
                  </nav>
            ):(
                <div></div>
            )}
 
    </div>
  );
}

export default Navbar;

