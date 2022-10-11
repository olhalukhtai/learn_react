import React from 'react';
import cls from './Error.module.css';
const Error = ({ error, setError }) => {
	let classes = cls.background__popup;
	if (error) {
		classes += ' ' + cls.active;
	}
	let blockError = cls.block__error;
	const closePopup = (e) => {
		setError(false);
		classes = cls.background__popup;
	};

	return (
		<div className={classes}>
			<div className={blockError}>
				{error}{' '}
				<button className={cls.closer} onClick={closePopup}>
					X
				</button>
			</div>
		</div>
	);
};

export default Error;
