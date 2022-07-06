import React from 'react';
import laptopImage from './images/hugo-121 1.png';
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
				<SoftButton style={{backgroundImage: `url($forkLogo)`, width: '3vh', height: '3vh'}} />
				<SoftButton text={"My button with long long text"} />
			</div>
			<div style={horizontalWrapperStyle}>
				<div>
					<div className={"title"}>
						Welcome to FORK - start your own path
					</div>
					<div style={{marginTop: '3em'}}>
						Scrum task board for GitHub
					</div>
				</div>
				<div>
					<img className={"welcomePageImage"} src={laptopImage} alt={"laptop"}/>
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;