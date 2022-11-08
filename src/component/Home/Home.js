import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import Slider from '../Slider/Slider';
import Static from '../Static/Static';

const Home = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/service')
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	console.log(services);

	return (
		<div>
			<Slider></Slider>
			<div className='py-7'>
				<div className='grid gap-6 grid-cols-1 md:grid-cols-2 md:p-4 lg:grid-cols-3 '>
					{services.map((service) => (
						<ServiceCard key={service._id} service={service}></ServiceCard>
					))}
				</div>
				<div className='mt-5'>
					<Link
						to='/services'
						className='bg-white text-[#090a27]  py-2 px-3 rounded'
					>
						See All
					</Link>
				</div>
			</div>
			<div className='my-5'>
				<Static></Static>
			</div>
		</div>
	);
};

export default Home;
