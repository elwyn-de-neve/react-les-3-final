import React from 'react';
import './ProductPage.css'
import { useParams } from "react-router-dom";

const ProductPage = () => {

        const { id } = useParams()

        // Hier komt de code om de data op te halen van één product

        return (
            <>
                <h1>ProductPage { id }</h1>
                <p>Dit is de product details pagina van <strong>product { id }</strong></p>
                <a href="../product">Ga terug naar het overzicht</a>
                <hr/>
            </>
        );
    }
;

export default ProductPage;