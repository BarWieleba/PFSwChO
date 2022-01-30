import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <h1>Realizacja zadania nr1 w ramach laboratorium PFSwCO</h1>
            <h2>Bartłomiej Wieleba</h2>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/otherpage">Other Page</Link>
            <br></br>
            <Link to="/documentationPage">Documentation Page</Link>
            <br></br>
            <Link to="/fibcalc">Fibonacci Calculator</Link>
        </div>
    );
};