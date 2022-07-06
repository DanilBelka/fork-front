import React from 'react';
import './styles/stylesheet.css'

const SoftButton = (props) => {
	return (
		<div className="soft-button" style={props.style} onClick={props.onClick}>
			{props.text}
		</div>
	);
};

export default SoftButton;