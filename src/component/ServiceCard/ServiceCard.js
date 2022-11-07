import React from 'react';
import { Link } from 'react-router-dom';
import '../shadin.css'

const ServiceCard = ({ service }) => {
    const { _id, img, title, description } = service;
    return (
			<div className='card card-compact w-96 bg-[#1e2b47] text-slate-200 shadow-xl  allborder hover:border-[#861600] border-solid border-2'>
				<figure>
					<img className='w-full h-[100px]' src={img} alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title text-[#ff3811]'>{title}</h2>
					<p className='font-semibold text-xl '>{description}</p>
					<div className='card-action justify-end mx-auto '>
						<Link to={`/checkout/${_id}`}>
							<button className='btn mt-2 border-[#ff3811] bg-[#ff3811] hover:border-[#861600] hover:bg-[#861600]  text-white'>
								Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
};

export default ServiceCard;