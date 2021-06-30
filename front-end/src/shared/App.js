import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Login, Result, SignIn, StopWatch, WebcamCapture } from '../pages';
import { Menu } from '../components';

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