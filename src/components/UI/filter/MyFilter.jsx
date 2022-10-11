import React, { useState } from 'react';
import MyInputSearch from '../input/MyInputSearch';
import MySelect from '../mySelect/MySelect';

const MyFilter = ({ filter, setFilter }) => {
	const [options, setOptions] = useState([
		{ value: 'sortId', text: 'по умолчанию' },
		{ value: 'sortBody', text: 'по тексту' },
		{ value: 'sortTitle', text: 'по заглавию' },
	]);

	return (
		<>
			<MySelect
				options={options}
				nameAction="Сортировка"
				value={filter.sort}
				changeSort={(value) => setFilter({ ...filter, sort: value })}
			/>
			<MyInputSearch
				value={filter.query}
				onChange={(value) => setFilter({ ...filter, query: value })}
			/>
		</>
	);
};

export default MyFilter;
