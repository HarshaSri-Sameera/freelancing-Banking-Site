import { useState } from 'react';
import '../css/LoginPage.css';
import { useNavigate } from 'react-router-dom'
import Language from '../pages/Language';
import {BiInfoCircle} from "react-icons/bi";
import usePasswordToggle from '../hooks/usePasswordToggle';
import useUsernameToggle from '../hooks/useUsernameToggle';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';
import logoo from '../assets/logoo.svg';
import axis1 from '../assets/axis1.jpg';
import axis2 from '../assets/axis2.jpg';
import axis3 from '../assets/axis3.jpg';
import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import qrScan from '../assets/qrScan.png';

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordInputType, Icon, togglePasswordVisibility] = usePasswordToggle(FaRegEye, FaRegEyeSlash); 
    const [usernameInputType, Icon1, toggleUsernameVisibility] = useUsernameToggle(FaRegEye, FaRegEyeSlash); 
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // perform sign-in logic here using the username and password
        console.log('Username:', username);
        console.log('Password:', password);
        navigate('/otp');
    };

    const [currentImage, setCurrentImage] = useState(0);

    const images = [car1, car2, car3];

    const handleChange = (index) => {
        setCurrentImage(index);
    };

  return (
    <div className="container-fluid">
        <div className="row">
            {/* <div className="col-lg-7" style={{backgroundColor: '#fd6704', height: '100vh'}}>
            <div className="carousel-container mt-3">
            <Carousel
                selectedItem={currentImage}
                onChange={handleChange}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
            >
                {images.map((image, index) => (
                <div key={index}>
                    <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="carousel-image"
                    />                
                </div>
                ))}
            </Carousel>
            <div className="carousel-dots">
                {images.map((_, index) => (
                <span
                    key={index}
                    className={`dot ${index === currentImage ? 'active' : ''}`}
                    onClick={() => setCurrentImage(index)}
                ></span>
                ))}
            </div>
            </div>
            </div> */}
            {/* <div className="col-lg-5" style={{backgroundColor: '#f2f2f2', height: '100vh'}}>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#871f40', borderRadius: '10px', padding: '10px', margin: '10px 0' }}>
                <img src={logo} alt="" width='100px' height='35px'/>
                <div className="container-fluid justify-content-between align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <a className="nav-link text-white" href="#About Us">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#Customer Care">Customer Care</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#FindATM/Branch">FindATM/Branch</a>
                        </li>
                        <Language />
                    </ul>
                    </div>
                </div>
                </nav>
                <div className="signin-container" style={{marginTop: '30vh'}}>
                    <h2 style={{color: '#fd6704'}}>Login to Internet Banking</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Login/CustomerID </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                placeholder="Enter your username"
                                onChange={handleUsernameChange}
                                required
                            />
                            <span className="info-icon"><BiInfoCircle /></span>
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                            type={passwordInputType}
                            id="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={handlePasswordChange}
                            required
                            />
                            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                {Icon}
                            </span>
                        </div>
                        <button type="submit">Verify</button>
                    </form>
                </div>
            </div> */}
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-light gradient-custom fixed-top" style={{height: '85px'}}>
                <div className="container-fluid">
                    <div style={{marginLeft: '40px'}}>
                        <a href=""><img src={logoo} alt="" width="300" height="80"/></a>
                    </div>
                    <div className="d-flex align-items-center" style={{marginRight: '60px'}}>
                        <a className="d-flex align-items-center hidden-arrow text-white text-decoration-none fs-5" href="#" role="button"><b>عربى</b></a>
                    </div>
                </div>
            </nav>
            <div className="col-lg-5" style={{height: '100vh', marginLeft: '110px', marginBottom: '350px'}}>
                <div className="signin-container" style={{marginTop: '18vh'}}>
                    <h2 style={{color: '#333333', fontFamily: 'Tektur, sans-serif'}}><b>Welcome to Mashreq Online Banking</b></h2>
                    <h2 style={{color: '#fd6704', marginTop: '-40px'}}>___</h2>
                    <form onSubmit={handleSubmit} style={{marginTop: '40px'}}>
                        <div className='row'>
                            <div className="col">
                                {/* <TextField required style={{color: '#000', width: '20vw'}} id="outlined-basic" label="Username" variant="outlined" /> */}
                                <input
                                    type={usernameInputType}
                                    id="username"
                                    value={username}
                                    placeholder="Username*"
                                    onChange={handleUsernameChange}
                                    required
                                    style={{ width: '20vw', height: '3.5em', padding: '0.5em' }}
                                />   
                                <span className="password-toggle-icon" style={{marginLeft:'5px', marginTop: '10px'}} onClick={toggleUsernameVisibility}>
                                    {Icon1}
                                </span>  
                            </div>
                            <div className="col mt-3">
                                <p style={{color: '#fd6704', fontFamily: 'Tektur, sans-serif', cursor: 'pointer'}}><b>Forgot Username</b></p>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className="col">
                                {/* <TextField required style={{color: '#000', width: '20vw'}} id="outlined-basic" label="Password" variant="outlined" /> */}
                                <input
                                    type={passwordInputType}
                                    id="password"
                                    value={password}
                                    placeholder="Password*"
                                    onChange={handlePasswordChange}
                                    required
                                    style={{ width: '20vw', height: '3.5em', padding: '0.5em' }}
                                />   
                                <span className="password-toggle-icon" style={{marginLeft:'5px', marginTop: '10px'}} onClick={togglePasswordVisibility}>
                                    {Icon}
                                </span>  
                            </div>
                            <div className="col mt-3">
                                <p style={{color: '#fd6704', fontFamily: 'Tektur, sans-serif', cursor: 'pointer'}}><b>Forgot Password</b></p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <Switch {...label} />
                                Virtual Keyboard
                            </div>
                        </div>
                        <button type="submit" className="btn btn-warning btn-lg mt-4" style={{width: '300px', height: '60px'}}>Sign In</button>
                        <hr style={{width: '230px', marginTop: '30px'}} />
                        <h6 style={{color: '#333333', fontFamily: 'Tektur, sans-serif'}}>Are you new to Mashreq Online <br />Banking?</h6>
                        <button id="create-button"type="button" className="btn btn-lg mt-3" style={{width: '300px', height: '60px', border: '1px solid #fd6704', fontFamily: 'Tektur, sans-serif', fontSize: '18px', letterSpacing: '-1px'}}><b>Create Credentials</b></button>
                    </form>
                    <div className="row">
                        <div className="col">
                            <LocalPoliceOutlinedIcon className="mt-4" style={{color: '#fd6704'}}/>
                        </div>
                        <div className="col mt-4">
                            <p style={{marginLeft: '-160px', fontFamily: 'Tektur, sans-serif', color: '#333333'}}><b>Ensure you are always <br /> protected</b><br /> Check out these security tips to <br />protect yourself from potential <br />online threats. <span style={{color: '#fd6704'}}><b>ReadMore</b></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5" style={{marginTop: '26vh'}}>
                <div className="carousel-container mt-3" style={{marginLeft: '100px'}}>
                    <Carousel
                        selectedItem={currentImage}
                        onChange={handleChange}
                        showArrows={false}
                        showStatus={false}
                        showThumbs={false}
                    >
                        {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="carousel-image"
                            />                
                        </div>
                        ))}
                    </Carousel>
                    <div className="carousel-dots">
                        {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentImage ? 'active' : ''}`}
                            onClick={() => setCurrentImage(index)}
                        ></span>
                        ))}
                    </div>
                </div>
                <div className="row mt-4">
                    <img src={qrScan} alt="" style={{width: '25vw', height: '25vh', border: '1px solid white', marginLeft: '150px', boxShadow: '1px 2px 6px #ccc'}}/>
                </div>
            </div>
            <footer className="fixed-bottom" style={{backgroundColor: 'white'}}>
                <hr />
                <p style={{fontFamily: 'Tektur, sans-serif', color: '#333333', fontSize: '14px', marginLeft: '20px'}}>Mashreqbank PSC and Mashreq Al Islami (The Islamic Window of Mashreqbank PSC, a bank licensed and regulated by the UAE  
                    <span style={{fontFamily: 'Tektur, sans-serif', color: '#333333', fontSize: '14px', marginLeft: '40px'}}><b>Requirements | Security |  Privacypolicy | Service Terms</b></span><br />Central Bank)
                </p>
            </footer>
        </div>
    </div>
  )
}

export default LoginPage;
