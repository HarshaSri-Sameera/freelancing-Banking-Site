import PropTypes from 'prop-types';
import ImageCaptureReceiver from './ImageCaptureReceiver';

export default function ReceiverCapture(props) {

  return (
    <div style={{width: '80vw', fontFamily: 'Tektur, sans-serif'}}>
        <div className='headColor'>Receiver Capture</div>
        <label
            className="mt-3 mb-3"
            style={{ color: "#fd6704", fontWeight: "bold" }}
        >
            Capture Image
        </label>
        <ImageCaptureReceiver />
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
                onClick={props.switchToCard3}
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

ReceiverCapture.propTypes = {
    switchToCard3 : PropTypes.func.isRequired,
}
