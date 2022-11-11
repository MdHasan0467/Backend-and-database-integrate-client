import React, { useState } from 'react';
import {  useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
	const storedReview = useLoaderData();

	const [reviews, setReviews] = useState(storedReview);
	

		const handleUpdate = (e) => {
			e.preventDefault();
			console.log(reviews);
			
			// fetch(`https://server-side-roan.vercel.app/update/${storedReview._id}`, {
			fetch(`https://server-side-roan.vercel.app/update/${storedReview._id}`, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(reviews),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.modifiedCount) {
						alert(data);
					}
				});
		};

	const handleChange = (e) => {
		const fieldName = e.target.name;
		const value = e.target.value;
		const newMessage = { ...reviews };
		newMessage[fieldName] = value;
		setReviews(newMessage);
	};
	
	return (
		<div>
			<h1 className='text-white lg:mr-20 my-5'>Update for :  {storedReview.serviceTitle}</h1>
			<form onSubmit={handleUpdate}>
				<textarea
					onChange={handleChange}
					className='text-gray-700 p-5'
					name='message'
					cols='30'
					rows='3'
					placeholder='Update Your Review'
				></textarea>
				<button type='submit' className='btn lg:ml-2 lg:mt-8 mt-8'>
					Update
				</button>
			</form>
		</div>
	);
};

export default UpdateReview;