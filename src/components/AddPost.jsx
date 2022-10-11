import React, { useEffect, useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const AddPost = ({
	posts,
	addPost,
	setActivePopup,
	redInput,
	setRedInput,
	post,
	setPost,
}) => {
	const postAdd = (e) => {
		if (post.title.length >= 9 && post.body.length >= 9) {
			post.id = posts.length + 1;
			addPost(post);
			setActivePopup(false);
			setPost({ id: 0, userId: 0, title: '', body: '' });
		} else {
			if (post.title.length <= 9) {
				setRedInput({ ...redInput, title: true });
			}
			if (post.body.length <= 9) {
				setRedInput({ ...redInput, body: true });
			}
		}
	};

	const checkTitle = (value) => {
		if (value.length < 9) {
			setRedInput({ ...redInput, title: true });
		} else {
			setRedInput({ ...redInput, title: false });
		}
		setPost({ ...post, title: value });
	};

	const checkBody = (value) => {
		if (value.length < 9) {
			setRedInput({ ...redInput, body: true });
		} else {
			setRedInput({ ...redInput, body: false });
		}
		setPost({ ...post, body: value });
	};

	return (
		<div className="add__posts">
			<MyInput
				redInput={redInput.title}
				setRedInput={setRedInput}
				value={post.title}
				onChange={(e) => checkTitle(e.target.value)}
				placeholder="название статьи"
			></MyInput>
			<MyInput
				redInput={redInput.body}
				setRedInput={setRedInput}
				value={post.body}
				onChange={(e) => checkBody(e.target.value)}
				placeholder="текст"
			></MyInput>
			<MyButton onClick={postAdd}>Добавить</MyButton>
		</div>
	);
};

export default AddPost;
