import React, { useState } from 'react';
import './PageNotFound.css'
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {

    // Redirect naar home na 3 seconden:
    // 1. Importeer useNavigate van react-router-dom
    // 2. Maak een const aan met de naam navigate en gebruik de useNavigate() hook
    // 3. Gebruik de navigate() functie om te redirecten naar de home pagina
    // 4. Gebruik de setTimeout() functie om de navigate() functie na 3 seconden uit te voeren
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 3000);

    // Countdown timer van 3 naar 0:
    // 1. Importeer useState van react
    // 2. Maak een const aan met de naam counter en gebruik de useState() hook
    // 3. Geef de useState() hook een beginwaarde mee van 3
    // 4. Gebruik de setInterval() functie om de counter met 1 te verlagen
    // 5. Gebruik de setCounter() functie om de counter te verlagen
    // 6. Gebruik de counter variabele om de timer te tonen in de pagina    const [counter, setCounter] = useState(3);

    const [counter, setCounter] = useState(3);

    setInterval(() => {
        setCounter(counter - 1);
    }, 1000);

    return (
        <>
            <h1>PageNotFound</h1>
            <p>Dit is de PageNotFound pagina en stuurt je automatisch terug naar home in <strong>{ counter } sec.</strong></p>
            <hr/>
        </>
    );
};

export default PageNotFound;