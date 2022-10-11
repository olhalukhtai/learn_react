import React from 'react';
import cls from '../input/MyInputSearch.module.css';
const MyInputSearch = ({ value, onChange }) => {
	return (
		<input
			placeholder={'поиск'}
			value={value}
			className={cls.inp}
			onChange={(e) => onChange(e.target.value)}
		></input>
	);
};

export default MyInputSearch;
