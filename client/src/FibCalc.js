import React, { Component } from 'react';
import Fib from "./Fib";
import {Link} from "react-router-dom";

class FibCalc extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Home</Link>
                    <br></br>
                    <Link to="/otherpage">Other Page</Link>
                    <br></br>
                    <Link to="/documentationPage">Documentation Page</Link>
                    <br></br>
                    <Link to="/fibcalc">Fibonacci Calculator</Link>
                    <br></br>
                </div>
                <Fib />
            </div>
        );
    }
}

export default FibCalc;