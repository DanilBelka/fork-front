import React from 'react';

import './styles/stylesheet.css';
import Header from "./Header"
import Footer from "./Footer"

const MainPage = () => {

    return (
        <div className={"MainPage"}>
            <Header></Header>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;