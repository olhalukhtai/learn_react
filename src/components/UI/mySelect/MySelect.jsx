import React from 'react';

const MySelect = ({ options, nameAction, value, changeSort }) => {
	return (
		<select value={value} onChange={(e) => changeSort(e.target.value)}>
			<option disabled>{nameAction}</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.text}
				</option>
			))}
		</select>
	);
};

export default MySelect;
