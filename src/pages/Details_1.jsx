import '../css/Details_1.css';
import {useState} from 'react';
import { useTransaction } from '../TransactionContext';

const Details_1 = () => {
  const { input2 } = useTransaction();
  const [Balance, setBalance] = useState(100000);
  const [showBalance, setShowBalance] = useState(false);

  const noLoading = (e) => {
    e.preventDefault();
  }

  return (
    <div className="horizontal-card" style={{width: '80vw', fontFamily: 'Tektur, sans-serif'}}>
      <div className="card-header">
        <h4 className="heading" style={{color: '#fd6704', backgroundColor: '#E6E4E0', padding: '10px'}}>Transaction Accounts</h4>
      </div>
      <div className="card-body shadow p-2">
        <table className="table">
          <thead>
            <tr>
              <th>Account No. / Name</th>
              <th>Branch</th>
              <th>Available Balance</th>
              <th>Transactions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>000021001533</td>
              <td>NIDADAVOLE</td>
              <td>
                {
                  showBalance ? Balance-input2 : <a href="" style={{color: '#fd6704'}} onClick={(e) => {noLoading(e); setShowBalance(true)}}>Click here for balance</a>
                }
              </td>
              <td><a href="" style={{color: '#fd6704'}} onClick={noLoading}>Click here for last 10 transactions</a></td>
            </tr>
            <tr>
              <td colSpan="4">
                {/* <a href="" style={{color: '#fd6704'}}>View Nomination and PAN Details</a> */}
                <a href="" style={{color: '#fd6704'}} onClick={noLoading}>عرض الترشيح وتفاصيل</a>
              </td>
            </tr>           
          </tbody>
        </table>
        <div>
          <div className="centered-link">
                <a href="" style={{color: '#fd6704'}} onClick={noLoading}>ViewallBalances</a>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Details_1;
