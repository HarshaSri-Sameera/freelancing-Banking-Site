import firebase from 'firebase/compat/app';
import { useEffect } from 'react'
import * as firebaseui from 'firebaseui';
import "firebaseui/dist/firebaseui.css";
import PropTypes from 'prop-types';
import '../css/OTPPage.css';

const PhoneAuth= (props) => {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);
        ui.start('.phone-auth-container', {
            signInOptions: [
              {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                defaultCountry: 'IN',
              }
            ],
            signInSuccessUrl: "/dashboard",
            privacyPolicyUrl: '/'
        })
    }, [props.auth])
  return (
    <div className="mt-4">
      <div className="centered-container">
          <div style={{textAlign: 'left', lineHeight: '8px'}}>
              <p>* Login Second Factor Authentication</p>
              <p>* Enter the One Time Password sent to your mobile phone</p>
          </div>
      </div>
      <div className='phone-auth-container mt-3'></div>
      <div style={{ margin: '20px', backgroundColor: 'cornsilk'}}>
          <p>
              <span style={{ color: 'red' }}>*</span> Please note that all communication related to Internet banking will be sent on your registered mobile number.<br/>
          </p>
          <p>
              <span style={{ color: 'red' }}>*</span> State Bank or any of its representative never sends you email/SMS or calls you over phone to get your personal information, password or one time SMS (high security) password. Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such email/SMS or phone call. Please report immediately on report.phishing@sbi.co.in if you receive any such email/SMS or Phone call. Immediately change your passwords if you have accidentally revealed your credentials.
          </p>
      </div>
    </div>
  )
}

PhoneAuth.propTypes = {
  auth: PropTypes.object.isRequired, 
};

export default PhoneAuth;