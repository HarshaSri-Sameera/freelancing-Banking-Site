import React from 'react'
import PropTypes from 'prop-types';
import { useImageContext } from '../useImageContextReceiver';
import fp1 from '../assets/fp1.png';

export default function VerifyReceiverCred(props) {
  const { capturedImage } = useImageContext();

  return (
    <div style={{width: '80vw'}}>
        <div className='headColor' style={{fontFamily: 'Tektur, sans-serif'}}>Receiver verification</div>
        <div className='row'>
             <div className="col mt-3" style={{marginLeft: '40px'}}>
                <h4 style={{marginLeft: '120px'}}>Image</h4>
                {capturedImage && (
                    <img src={capturedImage} alt="Captured" style={{ maxWidth: '300px', marginTop: '10px' }} />
                )}
             </div>
             <div className="col mt-3">
                <h4 style={{marginLeft: '120px'}}>Finger Print</h4>
                <img src={fp1} alt="" style={{maxWidth: '300px', maxHeight: '250px', marginLeft: '70px'}}/>
             </div>
        </div>
        <button className='button-css' style={{marginTop:'40px', marginLeft: '35vw'}} type="submit" onClick={props.switchToCard4}>Next</button>
    </div>
  )
}

VerifyReceiverCred.propTypes = {
  switchToCard4 : PropTypes.func.isRequired,
}
