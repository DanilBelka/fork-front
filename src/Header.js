import React from 'react';
import forkLogo from './images/fork-logo.svg';
import notification from './images/Notification.png'
import sms from './images/SMS.png'
import profileLogo from './images/profile-logo.png';

import './styles/stylesheet.css';
import SoftButton from "./SoftButton";

const Header = () => {
    return (
        <div className={"header"}>
            <span style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                <SoftButton style={{ backgroundImage: `url(${forkLogo})`, width: '3vh', height: '3vh' }} />
                <span style={{ paddingTop: "3vh" }}>
                    <span className={"title"} style={{ fontSize: "16px", textTransform: "uppercase", fontWeight: "bold" }}>FORK</span>
                    <div>Scrum board</div>
                </span>
            </span>
            <span className={"header__text"} style={{ marginLeft: "-3vw" }}>Board</span>
            <span className={"header__text"}>Tasks</span>
            <span className={"header__text"}>Calendar</span>
            <span className={"header__text"}>Team</span>
            <span style={{ marginLeft: "15vw", marginTop: "1.5vh" }}>
                <img className='headerImage' src={notification} alt=""></img>
                <img className='headerImage' src={sms} alt=""></img>
            </span>
            <span>
                <img className='profileLogo' src={profileLogo} alt=""></img>
            </span>
            <span className={"header__text"} style={{ fontSize: "16px", fontWeight: "700", marginLeft:"-6.2vw"}}>Asap</span>

        </div>
    );
};

export default Header;