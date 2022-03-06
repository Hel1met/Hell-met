import React from 'react';
import './Result.css';
import { Link } from 'react-router-dom'
import { Alert, AlertTitle } from "@material-ui/lab";

const Result = () => {

    const img_source = "http://localhost:8000/media/out_images/face.png"

    return (
    <div className="main_home">

        <p className="hell-met">Result</p>
        <img src= {img_source} alt='resultImage' width='350'></img>
        <Alert className="alert-box" severity="success">
            <AlertTitle>Success</AlertTitle>
            헬멧 착용이 확인되었습니다. — {" "}
            <Link to="./StopWatch">
                <strong>이용 시작!</strong>
            </Link>
        </Alert>
        <br></br>
        <Alert className="alert-box" severity="error">
            <AlertTitle>Error</AlertTitle>
            헬멧 착용이 확인되지 않았습니다. — {" "}
            <Link to="./WebcamCapture">
                <strong>다시 확인!</strong>
            </Link>
        </Alert>
        <br></br>
        <Alert className="alert-box" severity="info">
            <AlertTitle>Info</AlertTitle>
            헬멧 미착용 시 — <strong>범칙금 2만원!</strong>
        </Alert>

        <br></br>
    </div>
    );
};

export default Result;
