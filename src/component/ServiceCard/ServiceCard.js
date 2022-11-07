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
				
			</div>
		);
};

export default ServiceCard;