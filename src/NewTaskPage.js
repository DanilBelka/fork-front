import React from 'react';

import addBtn from "./images/Add.png"
import catLogo from "./images/catLogo.png"
import close from "./images/Close.png"

import './styles/stylesheet.css';
import Header from "./Header"
import Footer from "./Footer"

const NewTaskPage = () => {

    return (
        <div className={"mainPage"}>
            <Header></Header>
            <div className={"project-creation"} style={{ marginLeft: "auto", marginRight: "auto", paddingTop: "1vw", height: "71vh" }}>
                <span className={"project-creation__title"}>Create a new task</span>
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
                    <div className={"addFile"}>
                        <img src={addBtn} alt="" class={"addBtn"}></img>
                        <div>
                            <span style={{ marginLeft: "-2vw" }}>Drag files here or browse</span>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: "5vw", marginTop: "10px" }}>
                        <div>
                            <label for={"date"} style={{ position: "absolute", right: "5vw", top: "25vw", width: "1.2vw", color: "#6A61FF" }}>V</label>
                            <label className={"project-creation__label"} for={"assign"} style={{ lineHeight: "30px" }}>Assign to</label>
                            <div>
                                <input type={"text"} className={"project-creation__date"} id={"assign"} placeholder={"Tarasov D."}></input>
                            </div>
                        </div>
                        <div>
                            <label for={"date"} style={{ position: "absolute", left: "12vw", top: "25vw", width: "0.5vw", color: "#6A61FF" }}>V</label>
                            <label className={"project-creation__label"} for={"date"} style={{ lineHeight: "30px" }}>Deadline</label>
                            <div>
                                <input type={"date"} className={"project-creation__date"} id={"date"} value={"2022-07-25"}></input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className={"form-picture"} src={catLogo} alt="" style={{ top: "28vw" }}></img>
                        <label className={"project-creation__label"} for={"link"}>Link to Git repository</label>
                        <div>
                            <input type={"text"} className={"project-creation__input"} id={"link"} placeholder={"Add link to your repo here"}></input>
                        </div>
                        <hr className={"project-creation__line"}></hr>
                    </div>
                    <div style={{ paddingLeft: "8vw", paddingTop: "1.8vw" }}>
                        <input class={"project-creation__btn"} type={"submit"} value={"Create"} style={{height:"3vw"}}></input>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NewTaskPage;