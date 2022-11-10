import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
	// const dataLoad = useLoaderData();
	// console.log(dataLoad);
	// const [dataStored, setDataStored] = useState();

	// const handleReview = (e) => {
	// 	e.preventDefault();

	// 	fetch(`https://server-side-roan.vercel.app/reviews/${dataLoad._id}`, {
	// 		method: 'PUT',
	// 		headers: {
	// 			'content-type': 'application/json',
	// 		},
	// 		body: JSON.stringify(dataStored),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setDataStored(data);
	// 		});
	// };

	// const handleReviewChange = (e) => {
	// 		const textarea = e.target.review.value;
	// 		console.log(textarea);
	// 	};

	const storedData = useLoaderData();
	const [dataLoad, setDataLoad] = useState(storedData);

	const handleUpdate = (e) => {
		e.preventDefault();
		// console.log(user);
		fetch(`https://server-side-roan.vercel.app/reviews/${storedData._id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(dataLoad),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					toast.success('Successfully Updated!');
					console.log(data);
				}
			});
	};
	const handleBlue = (e) => {
		const fieldName = e.target.name;
		const value = e.target.value;
		console.log(value);
		const newData = { ...dataLoad };
		console.log(newData);
		newData[fieldName] = value;
		setDataLoad(newData);
		console.log(dataLoad);
	};

	return (
		<div>
			<form onSubmit={handleUpdate} className='flex'>
				<textarea
					onBlur={handleBlue}
					className='text-gray-700 p-5'
					name='review'
					id=''
					cols='30'
					rows='3'
					placeholder='Give Your Review'
				></textarea>

				<button className='btn btn-secondary ml-2'>Submit</button>
			</form>
		</div>
	);
};

export default UpdateReview;
