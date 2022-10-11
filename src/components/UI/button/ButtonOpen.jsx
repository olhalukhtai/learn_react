import React from 'react';
import classes from '../button/ButtonOpen.module.css';

const ButtonOpen = ({ children, ...props }) => {
	return (
		<button {...props} className={classes.btn}>
			{children}
		</button>
	);
};

export default ButtonOpen;
