// import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    // const { id, image, name, course_fee, details } = courseDetails;
    

        // const [services, setServices] = useState([]);
		// 		useEffect(() => {
		// 			fetch('http://localhost:5000/services')
		// 				.then((res) => res.json())
		// 				.then((data) => setServices(data));
		// 		}, []);
	return (
		<div className=' p-6 overflow-hidden py-10 shadow bg-gray-900 text-gray-100 mx-auto'>
			<Link src='.'></Link>
			<div className=' p-6 overflow-hidden py-10 shadow bg-gray-900 text-gray-100 mx-auto'>
				<article>
					<img className='w-72 mx-auto my-4' src={''} alt='' />
					<h2 className='text-2xl font-serif font-bold'>{''}</h2>
					<p className='mt-4 dark:text-gray-400 text-justify'>{''}</p>
					<div className='lg:flex items-center mt-8 space-x-4'>
						<div className='flex justify-between w-full'>
							<h3 className='text-lg text-secondary font-medium'>
								<span className='font-semibold font-serif text-white'>
									Course Fee :
								</span>{' '}
								{''}/-
							</h3>
							<p>Course ID: {''}</p>
						</div>
						<Link to='/services'>
							<button className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-secondary'>
								Back
							</button>
						</Link>
					</div>
				</article>
			</div>
		</div>
	);
};

export default Details;
