import React from 'react';
import laptopImage from './images/welcomeImage.png';
import forkLogo from './images/fork-logo.svg';

import './styles/stylesheet.css';
import SoftButton from "./SoftButton";
import Header from "./Header"

const MainPage = () => {

	const horizontalWrapperStyle = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	};

	return (
		<Header></Header>
	);
};

export default MainPage;