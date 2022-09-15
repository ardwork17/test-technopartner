import '../css/style.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react'; 
import imglogin from '../img/logo technopartner.png';
import { useHistory } from 'react-router';


function Login() {
    const [email, setEmail] =  useState("");
    const [password, setPass] =  useState("");
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('token')) {
           history.push('/');
        }
        }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
      
      const formData = new FormData();
      formData.append("grant_type", "password");
      formData.append("client_secret", "0a40f69db4e5fd2f4ac65a090f31b823");
      formData.append("client_id", "e78869f77986684a");
      formData.append("username", email);
      formData.append("password", password);
            await axios.post('https://soal.staging.id/oauth/token', formData)
            .then((response) => {
                localStorage.setItem('token', response.data.access_token);
                history.push('/dashboard');
                window.location.reload()
            })
            .catch((error) => {
         
            })
        };
return (
    <div className='login'>
    <div className="container container-login">
        <div className="row justify-content-center row-login">
            <div className="col-md-6 col-lg-5 col-sm-12 col-xs-12 col-login">
                <div className="title-login">
                    <img className="icon-login" src={imglogin}></img>
                </div>
                    <div className="card card-login">
                        <div className="card-body">
                       
                        <form onSubmit={onSubmit}>
                                <div className="input mb-3">
                                    <label className="form-label">Email</label>
                                        <input  type="email"
                                                name="email"
                                                className="form-input form-control"
                                                onChange={(e) => {setEmail(e.target.value)}}
                                             />
                                      
                                </div>
                       
                                <div className="input mb-3">
                                    <label className="form-label">Password</label>
                                            <input  
                                            name="password" 
                                            className="form-input form-control" 
                                            type="password"
                                            onChange={(e) => {setPass(e.target.value)}}/>
                                    
                                </div>

                              
                       
                                <div className="row row-btn">
                                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-btn">
                                        <div className="button-login">
                                            <button type="submit" className="btn btn-login" ><span className="title-login">Login</span></button>  
                                        </div>
                                    </div>
                                   
                                </div>
                            </form>
                        </div>
                    </div>  
            </div>

        </div>
    </div>
    </div>
  );
}

export default Login;

