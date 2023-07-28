import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { Link } from 'react-router-dom';
import axios from 'axios';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
};

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [image, setImage] = useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    }, [webcamRef]);

    const handleCaptureImage = async () => {
        try {
            // Convert the base64 image data to a blob
            const imageData = image.split(',')[1];
            const blobData = new Blob([Buffer.from(imageData, 'base64')], { type: 'image/jpeg' });
            const formData = new FormData();
            formData.append('image', blobData, 'captured-image.jpg');

            await axios.post('http://localhost:5000/save-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Image saved successfully');
        } catch (error) {
            console.log('Error saving image:', error);
        }
    };

    return (
        <React.Fragment>
            {image === null ? (
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    height={300}
                    width={450}
                    videoConstraints={videoConstraints}
                />
            ) : (
                <img className="captured" src={image} alt="captured" />
            )}

            {image === null ? (
                <button onClick={capture}>Capture photo</button>
            ) : (
                <button className="proceed" onClick={handleCaptureImage}>
                    <Link to="/login">Proceed</Link>
                </button>
            )}
        </React.Fragment>
    );
};

export default WebcamCapture;