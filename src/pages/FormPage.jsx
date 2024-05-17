import { useState, useEffect } from "react";
import "../css/Details_2.css";
import PropTypes from "prop-types";
import { useTransaction } from '../TransactionContext';

export default function FormPage(props) {
  const [input1, setInput1] = useState("");
  const [input3, setInput3] = useState("");
  const { input2, setInput2 } = useTransaction();
  const handleInputChange = (e) => {
    setInput2(e.target.value);
  };

  const data = [
    {
      id: 1,
      accNo: "000000010903843283",
      name: "TAV KUMAR",
      description: "NIDADAVOLE",
    }
  ];

  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowSelection = (id) => {
    setSelectedRow(id);
  };

  const [selectedOption, setSelectedOption] = useState("Option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "input1":
        setInput1(value);
        break;
      case "input2":
        setInput2(value);  // Amount field
        console.log("Input2 value:", value);
        break;
      case "input3":
        setInput3(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here, e.g., send data to a server
    console.log({ input1, input2, input3 });
  };

  // function handleTransactionSubmit() {
  // const popup = document.getElementById('popup');
  // const progress = document.getElementById('progress');
  // const message = document.getElementById('message');

  // popup.style.display = 'block';

  // let width = 0;
  // const interval = setInterval(() => {
  //   if (width >= 100) {
  //     clearInterval(interval);
  //     message.innerHTML = 'Transaction completed successfully';
  //     message.classList.add('success-message');
  //     setTimeout(() => {
  //       popup.style.display = 'none';
  //       message.classList.remove('success-message');
  //       // Reset the progress bar
  //       width = 0;
  //       progress.style.width = '0%';
  //       message.innerHTML = 'Transaction in progress...';
  //     }, 2000); // Hides popup after 2 seconds
  //   } else {
  //     width++;
  //     progress.style.width = width + '%';
  //   }
  // }, 30); // Adjust interval
  //   <Password/>
  // }

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://js.camsunit.com/jquery-1.11.3.min.js";

    const script2 = document.createElement("script");
    script2.src = "https://js.camsunit.com/camsScanner.js";

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  return (
    <div className="card" style={{width: '80vw'}}>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="colour" htmlFor="input1">
            Selected Account Number:{" "}
          </label>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;000035813490128</span>
        </div>
        <div className="mt-3">
          <label className="colour" htmlFor="input2">
            Amount <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="input2"
            name="input2"
            value={input2}
            onChange={handleInputChange}
            style={{ marginLeft: "145px" }}
          />
        </div>
        <div className="mt-3">
          <label className="colour" htmlFor="input3">
            Purpose <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="input3"
            name="input3"
            value={input3}
            onChange={handleChange}
            style={{ marginLeft: "145px" }}
          />
        </div>
        <label
          className="mt-3"
          style={{ color: "#fd6704", fontWeight: "bold" }}
        >
          Select the Beneficiary account
        </label>
        <table>
          <thead>
            <tr>
              <th>Account No.</th>
              <th>Beneficiary Name</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className={selectedRow === row.id ? "highlighted" : ""}
              >
                <td>
                  <label>
                    <input
                      type="radio"
                      name="rowSelection"
                      onChange={() => handleRowSelection(row.id)}
                    />
                    {row.accNo}
                  </label>
                </td>
                <td>{row.name}</td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span className="colour">Selected Account Number: </span>
          {selectedRow !== null && (
            <div>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;{data[selectedRow - 1].accNo}</span>
            </div>
          )}
        </div>
        <label
          className="mt-3"
          style={{ color: "#fd6704", fontWeight: "bold" }}
        >
          Select Payment Option
        </label>
        <br />

        <div className="radio-button-group">
          <label
            className="colour mt-3"
            htmlFor="input2"
            style={{ marginRight: "50px" }}
          >
            Payment Option <span style={{ color: "red" }}>*</span>
          </label>
          <label style={{ marginRight: "20px" }}>
            <input
              type="radio"
              value="Option1"
              checked={selectedOption === "Option1"}
              onChange={handleOptionChange}
            />
            Pay Now
          </label>
          <label style={{ marginRight: "20px" }}>
            <input
              type="radio"
              value="Option2"
              checked={selectedOption === "Option2"}
              onChange={handleOptionChange}
            />
            Schedule Later
          </label>
          <label style={{ marginRight: "20px" }}>
            <input
              type="radio"
              value="Option3"
              checked={selectedOption === "Option3"}
              onChange={handleOptionChange}
            />
            Standing Instruction
          </label>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            flexWrap: "nowrap",
            justifyContent: "right",
          }}
        >
          <button
            className="button-css"
            style={{ marginTop: "10px" }}
            type="submit"
            onClick={props.switchToCard1}
          >
            Next
          </button>
          <button
            className="button-css"
            style={{ marginTop: "10px", marginLeft: "10px" }}
            type="submit"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

FormPage.propTypes = {
  switchToCard1: PropTypes.func.isRequired,
};
