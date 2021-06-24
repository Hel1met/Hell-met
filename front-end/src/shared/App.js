import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Camera, Home, Login, SignIn, WebcamCapture } from '../pages';
import { Menu } from '../components';

class App extends Component {
    render() {
        return (
            <div>
                <Route component={Menu}/>
                <Route exact path="/" component={Home}/>
                <Route path="/Login" component={Login}/>
                <Route path="/SignIn" component={SignIn}/>
                <Route path="/Camera" component={Camera}/>
                <Route path="/WebcamCapture" component={WebcamCapture}/>
            </div>
        );
    }
}
export default App;