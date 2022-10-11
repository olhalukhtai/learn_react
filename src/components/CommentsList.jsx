import React, { useInsertionEffect, useMemo, useState } from 'react';
import Comment from '../components/Comment';
import AddComment from './AddComment';

const CommentsList = ({ comments, setComments }) => {
	const addComment = (com) => {
		setComments([com, ...comments]);
	};
	return (
		<div className="all__comments">
			<AddComment comments={comments} addComment={addComment} />

			<div className="add__comments">
				<div className="text__comment">Комментарии</div>

				{comments.map((com, idx) => (
					<Comment key={idx} comment={com} idx={idx} />
				))}
			</div>
		</div>
	);
};

export default CommentsList;
