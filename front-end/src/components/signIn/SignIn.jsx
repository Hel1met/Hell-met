import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
    <div className="main">
      <p className="signin" align="center">회원가입</p>
      <form className="form1" action="#" method="post">
          <div id="id">
            ID : <input className="inputID" name="id" type="text"></input>
            <input className="IDCheck" type="button" name="idCheck" value="아이디 확인"></input>
          </div> 
          <div id="passwd">P/W : <input className="inputPW" name="passwd" type="password"></input></div>
          <div id="name">이름 : <input className="inputName" name="name" type="text"></input></div>
          <div id="birth">생년월일 : 
            <select className="inputBirth" name="year">
              <option value="">--선택--</option>
              <option value="1995">1995년</option>
              <option value="1996">1996년</option>
              <option value="1997">1997년</option>
              <option value="1998">1998년</option>
              <option value="1999">1999년</option>
              <option value="2000">2000년</option>
              <option value="2001">2001년</option>
              <option value="2002">2002년</option>
            </select>
            <select className="inputBirth" name="month">
              <option value="">--선택--</option>
              <option value="1">1월</option>
              <option value="2">2월</option>
              <option value="3">3월</option>
              <option value="4">4월</option>
              <option value="5">5월</option>
              <option value="6">6월</option>
              <option value="7">7월</option>
              <option value="8">8월</option>
              <option value="9">9월</option>
              <option value="10">10월</option>
              <option value="11">11월</option>
              <option value="12">12월</option>
            </select>
            <select className="inputBirth" name="day">
              <option value="">--선택--</option>
              <option value="1">1일</option>
              <option value="2">2일</option>
              <option value="3">3일</option>
              <option value="4">4일</option>
              <option value="5">5일</option>
              <option value="6">6일</option>
              <option value="7">7일</option>
              <option value="8">8일</option>
              <option value="9">9일</option>
              <option value="10">10일</option>
              <option value="11">11일</option>
              <option value="12">12일</option>
              <option value="13">13일</option>
              <option value="14">14일</option>
              <option value="15">15일</option>
              <option value="16">16일</option>
              <option value="17">17일</option>
              <option value="18">18일</option>
              <option value="19">19일</option>
              <option value="20">20일</option>
              <option value="21">21일</option>
              <option value="22">22일</option>
              <option value="23">23일</option>
              <option value="24">24일</option>
              <option value="25">25일</option>
              <option value="26">26일</option>
              <option value="27">27일</option>
              <option value="28">28일</option>
              <option value="29">29일</option>
              <option value="30">30일</option>
              <option value="31">31일</option>
            </select>
          </div>
          <br/>
          <input className="submit" type="submit" align="center" value="가입하기"></input>
      </form>
    </div>
    );
};

export default SignIn;