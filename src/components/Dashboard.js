import '../css/style.scss';
import axios from 'axios';
// import imglogin from '../img/image_login.png';
import React, { useState, useEffect } from 'react'; 
import imglogin from '../img/logo technopartner.png';
import { useHistory } from 'react-router';


function Dashboard() {

    const token = localStorage.getItem("token");
    const [isLogin, SetIsLogin] = useState(false);
    const history = useHistory();
    const [greeting, setGreetings] = useState("");
    const [name, setName] = useState("");
    const [point, setPoint] = useState("");
    const [saldo, setSaldo] = useState("");
    const [qr, setQr] = useState("");
    const [kr0, setKr0] = useState("");
    const [kr1, setKr1] = useState("");
    const [kr2, setKr2] = useState("");

    useEffect(() => {
        if (token) {
          SetIsLogin(true);
          history.push("/dashboard");
        } else {
          SetIsLogin(false);
        }
      
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        //fetch user from Rest API
        axios.get("https://soal.staging.id/api/home")
        .then((response) => {
            setGreetings(response.data.result.greeting);
            setName(response.data.result.name);
            setPoint(response.data.result.point);
            setSaldo(response.data.result.saldo);
            setQr(response.data.result.qrcode);
            setKr0(response.data.result.banner[0]);
            setKr1(response.data.result.banner[1]);
            setKr2(response.data.result.banner[2]);
              });
            
      }, []);
  

return (
   
    <div className='dash'>
         {isLogin ? ( <div className="container container-dash">
        <div className="row justify-content-center row-dash">
            <div className='col-12 col-atas'>
                <div className='card card-atas'>
                    <div className='container container-content'>
                        <div className='row row-content'>
                            <div className='col-12 col-content'>
                                <h5 className='greetings'>{greeting},</h5>
                            </div>
                            <div className='col-12 col-content'>
                                <h5 className='nama'>{name}</h5>
                            </div>
                            <div className='col-12 col-content'>
                               <div className='row row-content-2'>
                                <div className='col-3 col-content-2'>
                                    <div className='card card-qr' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                        <img src={qr} style={{height:"55%", width:"55%", display:"block", margin:"20px auto"}}></img>
                                    </div>
                                </div>
                                <div className='col-1 col-content-2'>
                                    <div className='garis'></div>
                                </div>
                                <div className='col-8 col-content-2'>
                                    <div className='row justify-content-between row-saldo'>
                                        <div className='col-6 col-saldo'>
                                            <h5 className='title-saldo'>Saldo</h5>
                                        </div>
                                        <div className='col-6 col-saldo'>
                                            <h5 className='title-nilai'>Rp {saldo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h5>
                                        </div>
                                    </div>
                                    <div className='row row-point'>
                                        <div className='col-6 col-point'>
                                            <h5 className='title-point'>Points</h5>
                                        </div>
                                        <div className='col-6 col-point'>
                                            <h5 className='title-nilai'>{point}</h5>
                                        </div>
                                    </div>
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-12 col-bawah'>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators" style={{display:"none"}}>
    <button  type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={kr0} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={kr1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={kr2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>

        </div>
    </div>):(
        <h5>anada belum login</h5>
    )}
   
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content"style={{height:"100%", width:"60%", display:"block", margin:"20px auto"}}>
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" tyle={{textAlign:"center"}}>
      <label for="recipient-name"  class="col-form-label">
        <span s>Show the QR Code below to the cashier.</span>
        <img src={qr} style={{height:"55%", width:"55%", display:"block", margin:"20px auto"}}></img>
        </label>
       
      </div>
  
    </div>
  </div>
</div>
    </div>
  );
}

export default Dashboard;

