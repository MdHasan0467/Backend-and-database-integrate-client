import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Review from './Review';

const MyReview = () => {
	const { user, loading } = useContext(AuthContext);

	const [reviews, setReviews] = useState([]);
	useTitle('MyReview');

	useEffect(() => {
		fetch('https://server-side-roan.vercel.app/reviews')
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	if (loading) {
		return <progress className='progress progress-error w-56'></progress>;
	}
	return (
		<div>
			<Review></Review>
		</div>
	);
};

export default MyReview;
