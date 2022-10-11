import React from 'react';

const SelectPosts = ({ posts, setPosts }) => {
	const startSort = (e) => {
		if (e.target.value == 'sortTitle') {
			setPosts(
				[...posts].sort((post1, post2) =>
					post1.title.localeCompare(post2.title)
				)
			);
		} else if (e.target.value == 'sortBody') {
			setPosts(
				[...posts].sort((post1, post2) =>
					post1.body.localeCompare(post2.body)
				)
			);
		} else {
			setPosts([...posts].sort((post1, post2) => post1.id - post2.id));
		}
	};
	return (
		<select onChange={startSort}>
			<option disabled>сортировать</option>
			<option value="sortId">по умолчанию</option>
			<option value="sortBody">по тексту</option>
			<option value="sortTitle">по заглавию</option>
		</select>
	);
};

export default SelectPosts;
