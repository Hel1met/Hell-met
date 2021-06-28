import React, { useRef, useState, useEffect } from 'react';
import './WebcamCapture.css';
import Webcam from "react-webcam"
import { Link } from 'react-router-dom';
import imglogo from './helmet_example1.png';
import axios from "axios";

const WebcamComponent = () => <Webcam />;

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
        });

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
        .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err))
    };
  

    return (
        <div className="webcam-container">
            <div className="box-left">
                    <div className="webcam-img-left">
                        {image == '' ? <Webcam
                        audio={false}
                        height={500}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={500}
                        videoConstraints={videoConstraints}
                        /> : <img src={image} />}
                    </div>
                    <br></br>
                    <div>
                        {image != '' ?
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
                    {image == '' ? <img
                        src={imglogo}
                        height={500}
                        width={500}
                        /> : <img src={image} />}
                    </div>
                    <br></br>
                    <br></br>
                    
                    <Link className="check-btn" to="./Result" onClick={handleUpload} >Check !</Link>
            </div>
        </div>
    );
}

export default WebcamCapture;