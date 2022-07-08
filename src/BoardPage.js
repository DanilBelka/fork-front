import React from 'react';
import commentsLogo from "./images/Comments.png"

import './styles/stylesheet.css';
import Header from "./Header"
import Footer from "./Footer"

const BoardPage = () => {

    return (
        <div className={"mainPage"}>
            <Header></Header>
            <div className={"board"} style={{ marginLeft: "auto", marginRight: "auto", paddingTop: "", width: "65vw", marginTop: "5vh", height: "70vh" }}>
                <div style={{ display: "flex", flexDirection: "row", gap: "5vw" }}>
                    <div className={"board__title"}>
                        BACKLOG
                    </div>
                    <div className={"board__title"} style={{ background: "#CC70C8" }}>
                        DOING
                    </div>
                    <div className={"board__title"} style={{ background: "#F45555" }}>
                        ON HOLD
                    </div>
                    <div className={"board__title"} style={{ background: "#84FC79" }}>
                        DONE
                    </div>
                </div>
                <div style={{ display: "flex", gap:"5vw", marginTop:"1.5vw" }}>
                    <div className={"comments"}>
                        <div className={"board__comment"}>
                            <span className={"board__comment__title"}>Task №1</span>
                            <div className={"board__comment__description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            <div className={"board__comment__info"}>
                                <span>15 Jun</span>
                                <span>
                                    <img src={commentsLogo} alt="" className={"commentLogo"}></img>
                                    3
                                </span>
                            </div>
                        </div>
                        <div className={"board__comment"}>
                            <span className={"board__comment__title"}>Task №2</span>
                            <div className={"board__comment__description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            <div className={"board__comment__info"}>
                                <span>15 Jun</span>
                                <span>
                                    <img src={commentsLogo} alt="" className={"commentLogo"}></img>
                                    3
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={"comments"}>
                        <div className={"board__comment"}>
                            <span className={"board__comment__title"}>Task №3</span>
                            <div className={"board__comment__description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            <div className={"board__comment__info"}>
                                <span>15 Jun</span>
                                <span>
                                    <img src={commentsLogo} alt="" className={"commentLogo"}></img>
                                    3
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={"comments"}>
                        <div className={"board__comment"}>
                            <span className={"board__comment__title"}>Task №4</span>
                            <div className={"board__comment__description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div>
                            <div className={"board__comment__info"}>
                                <span>15 Jun</span>
                                <span>
                                    <img src={commentsLogo} alt="" className={"commentLogo"}></img>
                                    3
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={"comments"}>
                        <div className={"board__comment"}>
                            <span className={"board__comment__title"}>Task №5</span>
                            <div className={"board__comment__description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div>
                            <div className={"board__comment__info"}>
                                <span>15 Jun</span>
                                <span>
                                    <img src={commentsLogo} alt="" className={"commentLogo"}></img>
                                    3
                                </span>
                            </div>
                        </div>
                        <div className={"board__comment"}>
                            <span className={"board__comment__title"}>Task №6</span>
                            <div className={"board__comment__description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div>
                            <div className={"board__comment__info"}>
                                <span>15 Jun</span>
                                <span>
                                    <img src={commentsLogo} alt="" className={"commentLogo"}></img>
                                    3
                                </span>
                            </div>
                        </div>
                        <div className={"board__comment"}>
                            <span className={"board__comment__title"}>Task №7</span>
                            <div className={"board__comment__description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div>
                            <div className={"board__comment__info"}>
                                <span>15 Jun</span>
                                <span>
                                    <img src={commentsLogo} alt="" className={"commentLogo"}></img>
                                    3
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BoardPage;