import React from 'react';

import catLogo from "./images/catLogo.png"
import close from "./images/Close.png"

import './styles/stylesheet.css';
import Header from "./Header"
import Footer from "./Footer"

const NewProjectPage = () => {

    return (
        <div className={"mainPage"}>
            <Header></Header>
            <div className={"project-creation"} style={{ marginLeft: "auto", marginRight: "auto" }}>
                <span className={"project-creation__title"}>Create a new project</span>
                <img className={"project-creation__closeButton"} src={close} alt=""></img>
                <p></p>
                <form>
                    <div>
                        <label className={"project-creation__label"} for={"title"}>Title</label>
                        <div>
                            <input type={"text"} className={"project-creation__input"} id={"title"} placeholder={"Add a title for your project"}></input>
                        </div>
                        <hr className={"project-creation__line"}></hr>
                    </div>
                    <div style={{ marginTop: "1vw" }}>
                        <label className={"project-creation__label"} for={"description"}>Description</label>
                        <div>
                            <input type={"text"} className={"project-creation__input"} id={"description"} placeholder={"Add a brief description"}></input>
                        </div>
                        <hr className={"project-creation__line"}></hr>
                    </div>
                    <div style={{ marginTop: "25px", marginBottom: "10px" }} className={"deadline"}>
                        <label for={"date"} style={{position:"absolute", right:"5vw", top:"18.3vw", width:"1vw", color:"#6A61FF"}}>V</label>
                        <label className={"project-creation__label"} for={"date"}>Deadline</label>
                        <input type={"date"} className={"project-creation__date"} id={"date"} value={"2022-07-25"}></input>
                    </div>
                    <div>
                        <img className={"form-picture"} src={catLogo} alt=""></img>
                        <label className={"project-creation__label"} for={"link"}>Link to Git repository</label>
                        <div>
                            <input type={"text"} className={"project-creation__input"} id={"link"} placeholder={"Add link to your repo here"}></input>
                        </div>
                        <hr className={"project-creation__line"}></hr>
                    </div>
                    <div style={{ paddingLeft: "8vw", paddingTop: "1.8vw" }}>
                        <input class={"project-creation__btn"} type={"submit"} value={"Create"}></input>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NewProjectPage;