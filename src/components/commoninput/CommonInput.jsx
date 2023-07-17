import React from 'react';
import './commoninput.css';

const CommonInput = ({ type,placeholderText = 'Input', value, onChange }) => {
	return (
		<input
			type={type}
			placeholder={placeholderText}
			value={value}
			onChange={onChange}
		/>
	);
};

export default CommonInput;
