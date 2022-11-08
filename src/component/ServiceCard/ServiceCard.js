import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../shadin.css';

const ServiceCard = ({ service }) => {
	const { _id, img, title, description } = service;
	return (
		<div className='card card-compact w-96 bg-[#1e2b47] text-slate-200 shadow-xl  allborder hover:border-[#861600] border-solid border-2 md:rounded rounded-none'>
			<figure>
				<img className='w-full h-[300px]' src={img} alt='Shoes' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title text-[#ff3811]'>{title}</h2>
				<p className='font-semibold text-xl '>
					{description.slice(0, 100) + '...'}
				</p>
				
					<div className='card-action justify-end mx-auto '>
						<Link to={`/service/${_id}`}>
							<button
								type='button'
								className='flex items-center justify-center w-full p-3  font-semibold tracking-wide 
								rounded-md btn btn-secondary'
							>
								Details
							</button>
						</Link>
					</div>
					<div className='rating flex text-yellow-400'>
						<BsStarFill className='ml-2'></BsStarFill>
						<BsStarFill className='ml-2'></BsStarFill>
						<BsStarFill className='ml-2'></BsStarFill>
						<BsStarFill className='ml-2'></BsStarFill>
						<FaStarHalfAlt className='ml-2'></FaStarHalfAlt>
					</div>
				
			</div>
		</div>
	);
};

export default ServiceCard;
