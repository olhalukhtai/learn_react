import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import ButtonOpen from './UI/button/ButtonOpen';
import MyButton from './UI/button/MyButton';

const Post = ({ article, deletePost, error }) => {
	const navigate = useNavigate();

	const deletePostString = () => {
		deletePost(article);
	};

	return (
		<div>
			<div className="common_container_post">
				<div className="container__post">
					<div className="circle">{article.id}</div>
					<div className="name__article">{article.title}</div>
					<ButtonOpen
						onClick={() =>
							navigate(`/articles/article/${article.id}`)
						}
					>
						Открыть
					</ButtonOpen>

					<MyButton onClick={deletePostString}>Удалить</MyButton>
				</div>
				<div className="text__article">
					{article.body.slice(0, 50)}...
				</div>
			</div>
		</div>
	);
};

export default Post;
