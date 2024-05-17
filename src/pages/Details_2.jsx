import {useState} from 'react';
import FormPage from './FormPage';
import Password from './Password';
import TransactionSuccess from './TransactionSuccess';
import SenderCapture from './SenderCapture';
import ReceiverCapture from './ReceiverCapture';
import VerifyReceiverCred from './VerifyReceiverCred';
import VerifySenderCred from './VerifySenderCred';

const Details_2 = () => {
  
  const [activeState, setActiveState] = useState(1);

  const switchToCard1 = () => {
    setActiveState(2);
  };

  const switchToCard2 = () => {
    setActiveState(3);
  };

  const switchToCard3 = () => {
    setActiveState(4);
  }

  const switchToCard4 = () => {
    setActiveState(5);
  }

  const switchToCard5 = () => {
    setActiveState(6);
  }

  const switchToCard6 = () => {
    setActiveState(7);
  }

  return (
    <>
      {activeState === 1 && <FormPage switchToCard1={switchToCard1}/>}
      {activeState === 2 && <SenderCapture switchToCard2={switchToCard2}/>}
      {activeState === 3 && <ReceiverCapture switchToCard3={switchToCard3}/>}
      {activeState === 4 && <VerifyReceiverCred switchToCard4={switchToCard4}/>}
      {activeState === 5 && <VerifySenderCred switchToCard5={switchToCard5}/>}
      {activeState === 6 && <Password switchToCard6={switchToCard6}/>}
      {activeState === 7 && <TransactionSuccess/>}
    </>
  );
};

export default Details_2;
