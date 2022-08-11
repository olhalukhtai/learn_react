import React from 'react';
import classes from '../input/MyInput.module.css';

const MyInput = ({ children, ...props }) => {
	return <input {...props} className={classes.inp}></input>;
};

export default MyInput;
