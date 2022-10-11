import React from 'react';
import cls from './Loading.module.css';

const Loading = () => {
	return (
		<div className={cls.waiting__relative}>
			<div className={cls.waiting}></div>
			<div className={cls.text}> ожидание</div>
		</div>
	);
};

export default Loading;
