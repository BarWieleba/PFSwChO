import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import OtherPage from './OtherPage';
import MainPage from "./MainPage";
import DocPage from './DocumentationPage';
import FibCalc from "./FibCalc";

function App() {
    return (
        <Router>
            <div className="App">
                <div>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/otherpage" component={OtherPage}/>
                    <Route path="/documentationPage" component={DocPage}/>
                    <Route path="/fibcalc" component={FibCalc}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
