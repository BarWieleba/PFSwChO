import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/otherpage">Other Page</Link>
        <br></br>
        <Link to="/documentationPage">Documentation Page</Link>
        <br></br>
        <Link to="/fibcalc">Fibonacci Calculator</Link>
        <br></br>
      Im some other page!
    </div>
  );
};
