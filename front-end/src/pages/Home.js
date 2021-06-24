import React from 'react';
import imglogo from './helmet_icon.png';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div className="main_home">
        <p className="hell-met">Hell-met</p>
        <img src={imglogo} width='350'></img>
        <p className="discribe">웹캠을 통한 실시간 헬멧 탐지 프로그램입니다</p>
        <Link className="start_button" to="./webcamCapture">start</Link>
        <br></br>
    </div>
    );
};

export default Home;
