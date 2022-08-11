import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const AddPost = ({ posts, addPost }) => {
	const [post, setPost] = useState({ id: 0, userId: 0, title: '', body: '' });

	const postAdd = () => {
		post.id = posts.length + 1;
		addPost(post);
		setPost({ id: 0, userId: 0, title: '', body: '' });
	};

	return (
		<div className="add__posts">
			<MyInput
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				placeholder="название статьи"
			></MyInput>
			<MyInput
				value={post.body}
				onChange={(e) => setPost({ ...post, body: e.target.value })}
				placeholder="текст"
			></MyInput>
			<MyButton onClick={postAdd}>Добавить</MyButton>
		</div>
	);
};

export default AddPost;
