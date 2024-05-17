import React, { useState } from 'react';
import '../css/Password.css';
import usePasswordToggle from '../hooks/usePasswordToggle';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import smsImage from '../assets/smsImage.png';
import PropTypes from 'prop-types';
import ProgressBar from '../hooks/ProgressBar';

export default function Password(props) {
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [passwordInputType, Icon, togglePasswordVisibility] = usePasswordToggle(FaRegEye, FaRegEyeSlash); 
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmClick = async () => {
    setShowProgressBar(true);

    await new Promise(resolve => setTimeout(resolve, 5000));

    setShowProgressBar(false);

    props.switchToCard6();
  };

  return (
    <div style={{width: '80vw', fontFamily: 'Tektur, sans-serif'}}>
      <div className='headColor'>High Security Transaction Password</div>
      <div className='subColor mt-3' style={{marginLeft: '10px'}}>Enter high security password received in your Mobile Phone</div>
      <div className='mt-3' style={{fontWeight: 'bold', marginLeft: '10px'}}>Enter High Security Password <span style={{color: 'red'}}>*</span>
        <input
          type={passwordInputType}
          id="password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
          required
          style={{marginLeft:'60px'}}
        />   
        <span className="password-toggle-icon" style={{marginLeft:'10px'}} onClick={togglePasswordVisibility}>
          {Icon}
        </span>
      </div>
      <div className="mt-4" style={{display:'flex', justifyContent: 'center'}}>
        <button className='button-css' style={{marginTop:'10px'}} type="submit" onClick={handleConfirmClick}>Confirm</button>
        &nbsp;
        <button className='button-css' style={{marginTop:'10px'}} type="submit">Reset</button>
      </div>
      {showProgressBar && <ProgressBar />}
      <div className='phoneImgSec mt-4' style={{display: 'flex'}}>
        <img src={smsImage} alt="" width='100px' height='100px'/>
        <div style={{paddingLeft:'10px', paddingTop: '10px'}}>
          <h6>If you did not receive the High Security Password on SMS, you can</h6>
          <button className='button-css' style={{marginTop:'10px'}} type="submit">Click here to resend the OTP</button>
        </div>
      </div>
    </div>
  )
}

Password.propTypes = {
  switchToCard6: PropTypes.func.isRequired,
};
