import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import PostService, { CommentService } from '../API/PostService';
import CommentsList from '../components/CommentsList';
import ButtonOpen from '../components/UI/button/ButtonOpen';
import Loading from '../components/UI/loading/Loading';
import { useRequest } from '../hooks/useRequest';

const ArticlePage = () => {
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	const [req, loading, error] = useRequest(async () => {
		setComments(await CommentService.getAll(id));
		setPost(await PostService.getOne(id));
	});

	useEffect(() => {
		req();
	}, []);

	return (
		<div className="post__comment__container">
			<div className="post__title">{post.title}</div>
			<div className="post__body">{post.body}</div>
			<div className="button__back">
				<ButtonOpen onClick={() => navigate(-1)}>back</ButtonOpen>
			</div>
			{error == false ? (
				loading ? (
					<Loading />
				) : (
					<CommentsList
						comments={comments}
						setComments={setComments}
					/>
				)
			) : (
				<div>ошибка</div>
			)}
		</div>
	);
};

export default ArticlePage;
