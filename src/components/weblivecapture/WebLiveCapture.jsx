import React from 'react';
import Webcam from 'react-webcam';
import './weblivecapture.css';

const videoConstraints = {
	width: 1280,
	height: 720,
	facingMode: 'user'
};
const WebLiveCapture = () => {
	const webcamRef = React.useRef(null);
	const capture = React.useCallback(
		() => {
			webcamRef.current.getScreenshot();
			// console.log('Captured');
		},
		[webcamRef]
	);

	return (
		<React.Fragment>
			<Webcam
				audio={false}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				height={150}
				width={300}
				videoConstraints={videoConstraints}
			/>

			<button className="hide" onClick={capture}>
				Capture photo
			</button>
		</React.Fragment>
	);
};

export default WebLiveCapture;
