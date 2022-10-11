import React, { useState } from 'react';
import SelectPosts from './SelectPosts';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const AddComment = ({ addComment, comments }) => {
	const [comment, setComment] = useState({ email: '', name: '', body: '' });
	const commentAdd = () => {
		console.log(comment);
		addComment(comment);
		setComment({ email: '', name: '', body: '' });
	};
	return (
		<div>
			<div className="input__comment">
				<MyInput
					value={comment.email}
					onChange={(e) =>
						setComment({ ...comment, email: e.target.value })
					}
					className="inp"
					placeholder="mail"
				></MyInput>

				<MyInput
					value={comment.name}
					onChange={(e) =>
						setComment({ ...comment, name: e.target.value })
					}
					className="inp"
					placeholder="название комментария"
				></MyInput>
				<MyInput
					value={comment.body}
					onChange={(e) =>
						setComment({ ...comment, body: e.target.value })
					}
					className="inp"
					placeholder="текст комментария"
				></MyInput>
			</div>
			<div className="button__add__comment">
				<MyButton onClick={commentAdd}>Добавить</MyButton>
			</div>
		</div>
	);
};

export default AddComment;
