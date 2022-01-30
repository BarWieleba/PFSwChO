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

            <ol>
                <h3>
                    <p>Uruchomienie programu:</p>
                    <li>Klonowanie repozytorium: git clone https://github.com/BarWieleba/PFSwChO.git</li>
                    <li>W client wykonać npm install </li>
                    <li>W client wykonać  npm start </li>
                    <li>W client wykonać docker-compose build</li>
                    <li>W client wykonać docker-compose up</li>
                </h3>
            </ol>
            <p>
                W programie z zadania laboratorium 9 zmieniono układ stron i zmieniono menu, pojawiły się w nim nowe elementy.
                Ponad to dodano menu do każdej strony w celu prostszej nawigacji.
            </p>
        </div>
    );
};
