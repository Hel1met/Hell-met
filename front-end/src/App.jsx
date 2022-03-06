import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Login from './components/login/Login';
import SignIn from './components/signIn/SignIn';
import WebcamCapture from './components/webcamCapture/WebcamCapture';
import Result from './components/resultPage/Result';
import StopWatch from './components/stopwatch/StopWatch';



class App extends Component {
    render() {
        return (
            <div>
                <Route component={Menu}/>
                <Route exact path="/" component={Home}/>
                <Route path="/Login" component={Login}/>
                <Route path="/SignIn" component={SignIn}/>
                <Route path="/WebcamCapture" component={WebcamCapture}/>
                <Route path="/Result" component={Result}/>
                <Route path="/StopWatch" component={StopWatch}/>
            </div>
        );
    }
}
export default App;