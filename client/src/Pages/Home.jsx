import { QUERY_POSTS } from '../utils/query';
import { useQuery } from '@apollo/client';
import Login from '../Components/Login';

const Home = () => {
	const { loading, data } = useQuery(QUERY_POSTS);
	const posts = data?.getPosts || [];
	return (
		<>
			<Login />
			{loading ? (
				<p>Loading...</p>
			) : (
				posts.map((post) => (
					<div key={post._id}>
						<p>{post.username}</p>
						<p>{post.postText}</p>
						<p>{post.createdAt}</p>
					</div>
				))
			)}
		</>
	);
};

export default Home;
