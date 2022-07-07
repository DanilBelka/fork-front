import React from 'react';
import vector from "./images/Vector.png"

import './styles/stylesheet.css';
import Header from "./Header"
import Footer from "./Footer"

const MainPage = () => {

    return (
        <div className={"mainPage"}>
            <Header></Header>
            <div className={"main"} style={{ marginLeft: "auto", marginRight: "auto" }}>
                <div>
                    <span className={"main__text"}>Welcome to FORK - start your own path.</span>
                    <a href={"./create-project"}>
                        <button className={"main__create-button"}>Create project</button>
                    </a>
                </div>
                <div style={{ backgroundImage: `url(${vector})`, backgroundSize: "100% 100%" }}></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;