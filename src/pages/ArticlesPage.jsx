import React, { useEffect, useMemo, useState } from 'react';
import PostService from '../API/PostService';
import AddPost from '../components/AddPost';
import PostsList from '../components/PostsList';
import MyButton from '../components/UI/button/MyButton';
import Error from '../components/UI/popup/Error';
import MyFilter from '../components/UI/filter/MyFilter';
import Loading from '../components/UI/loading/Loading';
import ModuleWindow from '../components/UI/popup/ModuleWindow';
import { usePost } from '../hooks/usePost';
import { useRequest } from '../hooks/useRequest';
import Pagination from '../components/Pagination';

const ArticlesPage = () => {
	const [posts, setPosts] = useState([]);
	const [activePopup, setActivePopup] = useState(false);
	const [filter, setFilter] = useState({ query: '', sort: '' });
	const filterSortedPosts = usePost(posts, filter);
	const [redInput, setRedInput] = useState({ title: false, body: false });
	const [post, setPost] = useState({ id: 0, userId: 0, title: '', body: '' });
	const [settingsPagination, setSettingsPagination] = useState({
		totalPages: 0,
		limit: 20,
		currentPage: 1,
	});

	const [req, loading, error, setError] = useRequest(async () => {
		const [postsResult, totalPagesResult] = await PostService.getAll(
			settingsPagination.limit,
			settingsPagination.currentPage
		);
		console.log(postsResult); //{}{},...20 шт
		console.log(settingsPagination.limit); //20
		console.log(totalPagesResult); //100
		console.log(settingsPagination.currentPage); //1

		setPosts(postsResult);
		setSettingsPagination({
			...settingsPagination,
			totalPages: Math.ceil(totalPagesResult / settingsPagination.limit),
		});
	});

	const totalPages = useMemo(() => {
		const buttons = [];
		for (let i = 1; i <= settingsPagination.totalPages; i++) {
			buttons.push(i);
		}
		return buttons;
	}, [settingsPagination.totalPages]);

	console.log(totalPages);

	useEffect(() => {
		req();
	}, [settingsPagination.currentPage]);

	const addPost = (post) => {
		setPosts([...posts, post]);
	};

	const deletePostPage = (post) => {
		const newArr = posts.filter((p) => p.title !== post.title);
		setPosts(newArr);
	};

	return (
		<>
			<MyFilter filter={filter} setFilter={setFilter} />
			<ModuleWindow
				activePopup={activePopup}
				setActivePopup={setActivePopup}
				setRedInput={setRedInput}
				setPost={setPost}
			>
				<AddPost
					posts={filterSortedPosts}
					setPost={setPost}
					post={post}
					addPost={addPost}
					setActivePopup={setActivePopup}
					redInput={redInput}
					setRedInput={setRedInput}
				/>
			</ModuleWindow>
			<MyButton onClick={(e) => setActivePopup(true)}>add</MyButton>

			{loading == true ? (
				<Loading />
			) : error == false ? (
				<>
					<PostsList
						posts={filterSortedPosts}
						deletePostPage={deletePostPage}
					/>
					<Pagination
						totalPages={totalPages}
						setSettingsPagination={setSettingsPagination}
						settingsPagination={settingsPagination}
					/>
				</>
			) : (
				<Error error={error} setError={setError} />
			)}
		</>
	);
};

export default ArticlesPage;
