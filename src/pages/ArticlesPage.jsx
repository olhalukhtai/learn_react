import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import AddPost from '../components/AddPost';
import PostsList from '../components/PostsList';

const ArticlesPage = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		setTimeout(async () => {
			setPosts(await PostService.getAll());
		}, 2000);
	};

	const addPost = (post) => {
		setPosts([...posts, post]);
	};

	const deletePostPage = (post) => {
		const newArr = posts.filter((p) => p.title !== post.title);
		setPosts(newArr);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<>
			{console.log(posts)}
			<AddPost posts={posts} addPost={addPost} />
			{posts.length == 0 ? (
				<h1>загрузка</h1>
			) : (
				<PostsList posts={posts} deletePostPage={deletePostPage} />
			)}
		</>
	);
};

export default ArticlesPage;
