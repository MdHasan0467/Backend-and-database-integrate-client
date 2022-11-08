import React, { useContext } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Details = () => {
	const { user, loading } = useContext(AuthContext);
	useTitle('Details');
	const courseDetails = useLoaderData();
	if (loading) {
		return <progress className='progress progress-error w-56'></progress>;
	}
	console.log(courseDetails);
	const { img, description, title, fee } = courseDetails;
	

	return (
		<div className=' p-6 overflow-hidden py-10 shadow bg-gray-900 text-gray-100 mx-auto'>
			<div className=' p-6 overflow-hidden py-10 shadow bg-gray-900 text-gray-100 mx-auto'>
				<article>
					<img className='w-[50%] h-[400px] mx-auto my-4' src={img} alt='' />
					<h2 className='text-2xl font-serif font-bold'>{title}</h2>
					<p className='mt-4 dark:text-gray-400 text-justify'>{description}</p>
					<div className='lg:flex items-center mt-8 space-x-4'>
						<div className='flex justify-between w-full'>
							<h3 className='text-lg text-secondary font-medium'>
								<span className='font-semibold mr-1 font-serif text-white'>
									Fee :
								</span>
								$ {fee}
							</h3>
						</div>
						<div className='rating flex text-yellow-400'>
							<BsStarFill className='ml-2'></BsStarFill>
							<BsStarFill className='ml-2'></BsStarFill>
							<BsStarFill className='ml-2'></BsStarFill>
							<BsStarFill className='ml-2'></BsStarFill>
							<FaStarHalfAlt className='ml-2'></FaStarHalfAlt>
						</div>
						<Link to='/services'>
							<button className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-secondary'>
								Back
							</button>
						</Link>
					</div>
				</article>
			</div>
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
