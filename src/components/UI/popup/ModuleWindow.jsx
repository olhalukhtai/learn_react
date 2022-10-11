import React from 'react';
import cl from './ModuleWindow.module.css';
import clsImage from './closer.png';

const ModuleWindow = ({
	children,
	activePopup,
	setActivePopup,
	setPost,
	setRedInput,
}) => {
	let classes = cl.background__popup;
	if (activePopup) {
		classes += ' ' + cl.active;
	}
	const closePopup = (e) => {
		setActivePopup(false);
		console.log('close');
		setRedInput({ title: false, body: false });
		setPost({ id: 0, userId: 0, title: '', body: '' });
	};
	return (
		<div className={classes}>
			<div className={cl.block__popup}>
				{children}
				<div className={cl.closer} onClick={closePopup}>
					<img src={clsImage}></img>
				</div>
			</div>
		</div>
	);
};

export default ModuleWindow;
