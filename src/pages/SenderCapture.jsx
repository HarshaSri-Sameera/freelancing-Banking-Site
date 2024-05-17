import PropTypes from 'prop-types';
import ImageCaptureSender from './ImageCaptureSender';

export default function SenderCapture(props) {

  return (
    <div style={{width: '80vw', fontFamily: 'Tektur, sans-serif'}}>
        <div className='headColor'>Sender Capture</div>
        <label
            className="mt-3 mb-3"
            style={{ color: "#fd6704", fontWeight: "bold" }}
        >
            Capture Image
        </label>
        <ImageCaptureSender />
        <br />
        <br />
        <label style={{ color: "#fd6704", fontWeight: "bold" }}>
            Capture Finger Print
        </label>
        <div>
            <iframe
                src="https://uaeaxls.online/iframe/iframe.html"
                width="50%"
                height="300px"
                scroll="no"
            ></iframe>
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
                onClick={props.switchToCard2}
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
    </div>
  )
}

SenderCapture.propTypes = {
    switchToCard2 : PropTypes.func.isRequired,
}
