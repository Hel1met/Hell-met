import React, { useState } from 'react';
import './WebcamCapture.css';
import Webcam from "react-webcam"
import { Link } from 'react-router-dom';
import imglogo from '../../utils/helmet_example1.png';
import axios from "axios";
import imglogo1 from '../../utils/right_bee.png';

const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user"
};

const WebcamCapture = () => {
    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        },[]);

    const dataURItoBlob = (dataURI) => {
        let byteString = atob(dataURI.split(",")[1]);
        let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

        let ab = new ArrayBuffer(byteString.length);
        let ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }

    const handleUpload = () => {

        const form_data = new FormData();
        const file = dataURItoBlob(image);
        form_data.append("image",file,"face.png");
        let url = "http://localhost:8000/api/myapp/";
        const config = {
            headers: { 'content-type': 'multipart/form-data' }}
        axios.post(url, form_data, config)
        .then(alert('결과확인을 눌러주세요'))
        .catch(err => console.log(err));
    };

    return (
        <div className="webcam-container">
            <div className="box-left">
                    <div className="webcam-img-left">
                        {image === '' ? <Webcam
                        audio={false}
                        height={500}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={500}
                        videoConstraints={videoConstraints}
                        /> : <img src={image} alt='capturedImage'/>}
                    </div>
                    <br></br>
                    <div>
                        {image !== '' ?
                        <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                        }}
                        className="webcam-btn">Again </button> :
                        <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                        }}
                        className="webcam-btn">Capture</button>
                        }
                    </div>
            </div>


            <div className="box-right">
                    <div className="webcam-img-right">
                    {image === '' ? <img
                        src={imglogo}
                        alt='imglogo'
                        height={500}
                        width={500}
                        /> : <img src={image} alt='capturedImage'/>}
                    </div>
                    <div>
                        <button onClick={handleUpload} className="check-btn">헬멧확인</button>
                        <img src={imglogo1} alt='capturedImage' width='77'></img>
                        <Link className="check-btn" to="./Result">결과확인</Link>
                    </div>
                    <br></br>
                    <br></br>
            </div>
        </div>
    );
}

export default WebcamCapture;