import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Product from "./pages/Product/Product";
import ProductPage from "./pages/ProductPage/ProductPage";
import Profile from "./pages/Profile/Profile";
import { Navigate, Route, Routes } from "react-router-dom";
import './styles/global.css';
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
    // Routing structuur opzetten:
    // 1. Installeer react-router-dom
    // 2. Importeer BrowserRouter, Routes en Route
    // 3. Maak een <BrowserRouter> component aan (index.js)
    // 4. Maak een <Routes> component aan (App.js)
    // 5. Maak een <Route> component aan voor elke pagina (App.js) en geef ze een path en een element mee
    // 6. Importeer de pagina's die je wilt gebruiken

    // Dynamische routes opzetten:
    // 1. Maak een <Route> component aan met een path en een element
    // 2. Gebruik een : om een dynamisch deel aan te geven
    // 3. Gebruik useParams() om het dynamische deel uit te lezen
    // 4. Gebruik de data om de pagina te vullen

    // Authenticated routes opzetten:
    // 1. Maak een auth state aan
    // 2. Maak een <Route> component aan met een path en een element
    // 3. Gebruik de ternary operator i.c.m. de auth state om te bepalen of de gebruiker toegang heeft tot de pagina
    const [ isAuth, setIsAuth ] = React.useState( false )

    // 404 pagina opzetten:
    // 1. Maak een <Route> component aan met een path en een element
    // 2. Gebruik de * om aan te geven dat dit de 404 pagina is
    // 3. Gebruik de <Navigate> component om de gebruiker te redirecten naar de 404 pagina

    return (
        <>
            <Nav auth={ isAuth } setAuth={ setIsAuth }/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/about" element={ <About/> }/>
                <Route path="/contact" element={ <Contact/> }/>
                <Route path="/product" element={ <Product/> }/>
                <Route path="/product/:id" element={ <ProductPage/> }/>
                <Route path="/profile" element={ isAuth ? <Profile/> : <Navigate to="/"/> }/>
                <Route path="*" element={ <PageNotFound/> }/>
            </Routes>
        </>
    );
}

export default App;
