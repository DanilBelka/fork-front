import React from 'react';
import laptopImage from './images/welcomeImage.png';
import forkLogo from './images/fork-logo.svg';

import './styles/stylesheet.css';
import SoftButton from "./SoftButton";

const WelcomePage = () => {

	const horizontalWrapperStyle = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	};

	return (
		<div className={"welcome_page_panel"}>
			<div className={"upper-panel"}>
				<span style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
					<SoftButton style={{backgroundImage: `url(${forkLogo})`, width: '3vh', height: '3vh'}} />
					<span style={{paddingTop: "2.5vh"}}>
						<span className={"title"}>FORK</span>
						<div>Just start</div>
					</span>
				</span>
				<SoftButton text={"Contuct us"} />
			</div>
			<div style={{height: "20vh"}}></div>
			<span style={horizontalWrapperStyle}>
				<div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
					<div className={"title"}>
						Welcome to Fork-board - start your own path
					</div>
					<div>
						Scrum task board for GitHub
					</div>
					<SoftButton text={"Sign in"} style={{width: "7vw"}}/>
				</div>
				<div>
					<img className={"welcomePageImage"} src={laptopImage} alt={"laptop"}/>
				</div>
			</span>
			<div style={{height: "20vh"}}></div>
			<div style={{fontSize: "9pt", marginLeft: "5vw"}}>© 2022 FORK</div>
		</div>
	);
};

export default WelcomePage;