import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import axios from 'axios';
import Loading from '../components/Loading';

import '../assets/Post.css';

const Post = () => {
	const [data, setData] = useState({});
	const history = useHistory();
	const { id } = useParams();
	
	useEffect(() => {
		axios.get(`https://fruityvice.com/api/fruit/${id}`)
			.then(({ data }) => setData(data))
			.catch(err => console.log(err));
	}, [])

	return (
		<div className="post-wrapper">
			<MdArrowBack size={20} className="arrowBack" onClick={() => history.goBack()} />
			{
				Object.keys(data).length === 0 ? <Loading /> : (
					<>
						<h1>{data.name}</h1>
						<p>{data.genus}</p>
					</>
				)
			}
		</div>
	)
};

export default Post;