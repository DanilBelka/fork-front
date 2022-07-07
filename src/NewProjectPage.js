import React from 'react';

import './styles/stylesheet.css';
import Header from "./Header"
import Footer from "./Footer"

const NewProjectPage = () => {

    return (
        <div className={"mainPage"}>
            <Header></Header>
            <div className={"project-creation"} style={{ marginLeft: "auto", marginRight: "auto" }}>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NewProjectPage;