import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Details = () => {
	const {user} = useContext(AuthContext)
	const courseDetails = useLoaderData();
	console.log(courseDetails);
	const { _id, img, description, title, fee } = courseDetails;



	return (
		<div className=' p-6 overflow-hidden py-10 shadow bg-gray-900 text-gray-100 mx-auto'>
			<Link src='.'></Link>
			
			<br />
			<div>
				{user ? (
					<div className='flex'>
						<textarea
							name=''
							id=''
							cols='30'
							rows='3'
							placeholder='Give Your Feedback'
						></textarea>
						<button className='btn btn-secondary ml-2'>Submit</button>
					</div>
				) : (
					<div className='flex'>
						<p className='mx-5'>To add a review Please</p>
						<Link className='text-secondary hover:text-red-700' to='/login'>
							Login
						</Link>
					</div>
				)}
				<div>
					<p>FeedBack</p>
				</div>
			</div>
		</div>
	);
};

export default Details;
