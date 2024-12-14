import React from 'react';

export default BoldText = ({ text }) => {
	const regex = /_(.*?)_/g;

	const getBoldText = (text) => {
		return text.split(regex).map((part, index) => {
			if (index % 2 === 1) {
				return <strong key={index} style={{ fontWeight: 'bold' }}>{part}</strong>;
			}
			return <React.Fragment key={index}>{part}</React.Fragment>;
		});
	};

	return <p class="bulletpoint">{getBoldText(text)}</p>;
};