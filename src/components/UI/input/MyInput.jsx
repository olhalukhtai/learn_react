import React from 'react';
import classes from '../input/MyInput.module.css';

const MyInput = ({ children, className, redInput, setRedInput, ...props }) => {
	let class__common = classes.inp;
	if (redInput) {
		class__common = ' ' + classes.red__inp;
	}
	return (
		<input {...props} className={`${class__common} ${className}`}></input>
	);
};

export default MyInput;
