import { BiCheckShield } from "react-icons/bi";
import { useTransaction } from '../TransactionContext'; // Replace with the actual path to your TransactionContext

export default function TransactionSuccess() {
  const { input2 } = useTransaction();

  return (
    <>
    <div
      className="card"
      style={{ backgroundColor: "#AFE1AF", color: "darkgreen", fontFamily: 'Tektur, sans-serif', width: '80vw', boxShadow: '3px 10px 6px #ccc' }}
    >
      <h6 className="mt-3">
        <span>
          <BiCheckShield />
        </span>
        &nbsp;Debit Transaction Status: Completed Successfully
      </h6>
      <div>
        <h6 className="mt-3" style={{ fontWeight: "bold" }}>
          Detail Account Details
        </h6>
        <table style={{width: '75vw'}}>
          <thead className="shadow">
            <tr>
              <th>Account No.</th>
              <th>Account Type</th>
              <th>Branch</th>
              <th>Amount</th>
              <th>Transaction Type</th>
              <th>UTR Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>00000007415085239</td>
              <td>Savings Account</td>
              <td>NIDADAVOLE</td>
              <td>{input2}</td>
              <td>NEFT</td>
              <td>AKA42897630178</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      className="card mt-4 mb-5"
      style={{ backgroundColor: "#AFE1AF", color: "darkgreen", fontFamily: 'Tektur, sans-serif', width: '80vw', boxShadow: '3px 10px 6px #ccc' }}
    >
      <div>
        <h6 className="mt-4" style={{ fontWeight: "bold" }}>
          Credit Account Details
        </h6>
        <table style={{width: '75vw'}}>
          <thead className="shadow">
            <tr>
              <th>Account No.</th>
              <th>Beneficiary Name</th>
              <th>Amount</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>000000010903843283</td>
              <td>TAV KUMAR</td>
              <td>{input2}</td>
              <td>NIDADAVOLE</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="button-css"
          style={{ marginTop: "10px", marginLeft: "10px" }}
          type="submit"
        >
          Print
        </button>
      </div>
    </div>
    </>
  );
}