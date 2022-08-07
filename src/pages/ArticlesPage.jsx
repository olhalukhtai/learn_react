import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import Post from '../components/Post';

const ArticlesPage = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		setPosts(await PostService.getAll());
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div className="container__posts">
			{posts.map((post, idx) => (
				<Post key={idx + 1} article={post} />
			))}
		</div>
	);
};

export default ArticlesPage;
