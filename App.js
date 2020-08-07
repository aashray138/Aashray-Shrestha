import {hot} from 'react-hot-loader/root';
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Header from './src/component/navbar'

function App() {
    return (
        <Router>
            <div className="main-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Header/>
                <Route exact path='/'
                       component={Header}
                />
                />
            </div>
        </Router>
    );
}

export default hot(App);