import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
    <div className="main">
      <p className="login" align="center">로그인</p>
      <form className="form1">
        <input className="un " type="text" align="center" placeholder="ID"></input>
        <input className="pass" type="password" align="center" placeholder="Password"></input>
        <br></br><br></br><br></br>
        <input className="submit" type="submit" align="center" value="로그인"></input>
      </form>
      <br></br><br></br>
      <Link className="goto_sign_in" to="./SignIn">회원가입</Link>
    </div>
    );
};

export default Login;