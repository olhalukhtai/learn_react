import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import MyButton from './UI/button/MyButton';

const Post = ({ article, deletePost }) => {
	const navigate = useNavigate();

	const deletePostString = () => {
		deletePost(article);
	};

	return (
		<div className="container__post">
			<div className="circle">{article.id}</div>
			<div className="name__article">{article.title}</div>
			<button onClick={() => navigate(`/articles/article/${article.id}`)}>
				Открыть
			</button>
			<MyButton onClick={deletePostString}>Удалить</MyButton>
		</div>
	);
};

export default Post;
