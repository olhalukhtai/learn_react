import React from 'react';

const Post = ({ article }) => {
	return (
		<div className="container__post">
			<div className="circle">{article.id}</div>
			<div className="name__article">{article.title}</div>
			<button className="button__delete">Удалить</button>
		</div>
	);
};

export default Post;
