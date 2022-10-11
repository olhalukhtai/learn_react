import React, { useEffect, useState } from 'react';

const Comment = ({ comment, idx }) => {
	return (
		<div>
			<div className="comment">
				<div className="mail">{comment.email}</div>
				{comment.name}
				{comment.body}
			</div>
		</div>
	);
};

export default Comment;
