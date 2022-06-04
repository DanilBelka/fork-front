import React from 'react';
import './styles/soft-box.css'

const TicketArea = () => {
	const customStyle = {
		width: '200px',
		height: '500px'
	}
	return (
		<div className="soft_box" style={customStyle}>
			<h1>TO DO</h1>
		</div>
	);
};

export default TicketArea;