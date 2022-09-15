import '../css/style.scss';
import axios from 'axios';
import React, { useState, useEffect ,useHistory} from 'react'; 
import { Link, useLocation  } from 'react-router-dom';
import home from '../img/home2.png';
import menu from '../img/menu2.png';
import { Button } from 'bootstrap';


function Navbar() {
    const [isLogin, SetIsLogin] = useState(false);
    const token = localStorage.getItem("token");
    const [data, setData] = useState("");
    useEffect(() => {
        if (token) {
          SetIsLogin(true);
        } else {
          SetIsLogin(false);
        }
      
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        //fetch user from Rest API
        const formData = new FormData();
        formData.append("show_all", "1");
        axios.post("https://soal.staging.id/api/menu", formData)
        .then((response) => {
            setData(response.data);
            console.log("ini data", response.data)
              });
            
      }, []);
  
return (
    <div className='menu'>
            {isLogin ? (
                 <div className='title'>
                    <h5 className='title-text'>MENU</h5>
                    <div className='card card-menu' >
                    <div class="tab">
                        <a href='#page1'>
                        <button class="tablinks" >Seasonal menu</button>
                        </a>
                        <a href='#page2'>
                        <button class="tablinks" >Best Seller</button>
                        </a>
                        <a href='#page3'>
                        <button class="tablinks" >Coffee</button>
                        </a>
                        <a href='#page4'>
                        <button class="tablinks" >Cold Brew</button>
                        </a>
                        <a href='#page5'>
                        <button class="tablinks" >Chocolate</button>
                        </a>
                       
                    </div>

                    <div className='content'>
                        <div className='page' id="page1">
                            <h5 className='title-menu'>Seasonal menu</h5>
                            <div className='container container-menu'>
                            <div className='row row-menu'>
                            <div className='col-12 col-menu'>
                            <div className='row row-menu-isi'>
                            <div className='col-2 col-menu-isi'>
                                <img src={home} className="img-menu"></img>
                            </div>
                            <div className='col-8 col-menu-isi'>
                            <div className='row row-desk'>
                            <div className='col-12 col-menu-desk'>
                                <h5 className='name'>Raisin Delight Frappe</h5>
                                </div>
                            <div className='col-12 col-menu-desk'>
                            <h5 className='desk'>A timeess classic, A sweet, Creamy</h5>
                                </div>
                                </div>
                            </div>
                            <div className='col-2 col-menu-isi'>
                            <h5 className='harga'>50.000</h5>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className='page' id="page2">
                            <h5 className='title-menu'>Best Seller</h5>
                            <div className='container container-menu'>
                            <div className='row row-menu'>
                            <div className='col-12 col-menu'>
                            <div className='row row-menu-isi'>
                            <div className='col-2 col-menu-isi'>
                                <img src={home} className="img-menu"></img>
                            </div>
                            <div className='col-8 col-menu-isi'>
                            <div className='row row-desk'>
                            <div className='col-12 col-menu-desk'>
                                <h5 className='name'>Raisin Delight Frappe</h5>
                                </div>
                            <div className='col-12 col-menu-desk'>
                            <h5 className='desk'>A timeess classic, A sweet, Creamy</h5>
                                </div>
                                </div>
                            </div>
                            <div className='col-2 col-menu-isi'>
                            <h5 className='harga'>50.000</h5>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className='page' id="page3">
                            <h5 className='title-menu'>Coffee</h5>
                            <div className='container container-menu'>
                            <div className='row row-menu'>
                            <div className='col-12 col-menu'>
                            <div className='row row-menu-isi'>
                            <div className='col-2 col-menu-isi'>
                                <img src={home} className="img-menu"></img>
                            </div>
                            <div className='col-8 col-menu-isi'>
                            <div className='row row-desk'>
                            <div className='col-12 col-menu-desk'>
                                <h5 className='name'>Raisin Delight Frappe</h5>
                                </div>
                            <div className='col-12 col-menu-desk'>
                            <h5 className='desk'>A timeess classic, A sweet, Creamy</h5>
                                </div>
                                </div>
                            </div>
                            <div className='col-2 col-menu-isi'>
                            <h5 className='harga'>50.000</h5>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className='page' id="page4">
                            <h5 className='title-menu'>Cold Brew</h5>
                            <div className='container container-menu'>
                            <div className='row row-menu'>
                            <div className='col-12 col-menu'>
                            <div className='row row-menu-isi'>
                            <div className='col-2 col-menu-isi'>
                                <img src={home} className="img-menu"></img>
                            </div>
                            <div className='col-8 col-menu-isi'>
                            <div className='row row-desk'>
                            <div className='col-12 col-menu-desk'>
                                <h5 className='name'>Raisin Delight Frappe</h5>
                                </div>
                            <div className='col-12 col-menu-desk'>
                            <h5 className='desk'>A timeess classic, A sweet, Creamy</h5>
                                </div>
                                </div>
                            </div>
                            <div className='col-2 col-menu-isi'>
                            <h5 className='harga'>50.000</h5>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className='page' id="page5">
                            <h5 className='title-menu'>Chocolate</h5>
                            <div className='container container-menu'>
                            <div className='row row-menu'>
                            <div className='col-12 col-menu'>
                            <div className='row row-menu-isi'>
                            <div className='col-2 col-menu-isi'>
                                <img src={home} className="img-menu"></img>
                            </div>
                            <div className='col-8 col-menu-isi'>
                            <div className='row row-desk'>
                            <div className='col-12 col-menu-desk'>
                                <h5 className='name'>Raisin Delight Frappe</h5>
                                </div>
                            <div className='col-12 col-menu-desk'>
                            <h5 className='desk'>A timeess classic, A sweet, Creamy</h5>
                                </div>
                                </div>
                            </div>
                            <div className='col-2 col-menu-isi'>
                            <h5 className='harga'>50.000</h5>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <h5>{data}</h5>
                    </div>
                 </div>
                
            ):(
                <div></div>
            )}
 
    </div>
  );
}

export default Navbar;

