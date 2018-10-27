import React, { Component } from 'react';
import { BrowerRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './NavBar';

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="home" exact path="/" component={HomePage} />
                    <h1>MRobinson</h1>
                </div>
            </Router>
        )
    }
}

export default App;