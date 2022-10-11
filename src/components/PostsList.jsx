import React from 'react';
import Post from '../components/Post';

const PostsList = ({ posts, deletePostPage, error }) => {
	return (
		<div className="container__posts">
			{posts.map((post, idx) => (
				<Post
					error={error}
					key={idx + 1}
					article={post}
					deletePost={deletePostPage}
				/>
			))}
		</div>
	);
};

export default PostsList;
