import React from 'react';
import AddPost from './AddPost';
import MyButton1 from './UI/button/MyButton1';

const AddFirstPost = ({ addPost }) => {
	const addPosts = (post) => {
		addPost(post);
	};
	return (
		<>
			<div>Нет постов на данный момент.Желаете добавить?;)</div>;
			<AddPost addPost={addPost} />
		</>
	);
};

export default AddFirstPost;
