import React from 'react';

const GalleryLoader = ({ service }) => {
      const { _id, img, title, description } = service;
	return (
		<div>
			<div>
				<div className='flex relative'>
					<img
						alt='gallery'
						className='absolute inset-0 w-full h-[300px] object-cover object-center'
						src={img}
					/>
					<div className='px-8 py-10 relative z-10 w-full h-[300px] border-4 border-gray-500 bg-cyan-300 opacity-0 hover:opacity-70'>
						<h2 className='tracking-widest text-sm title-font font-medium text-indigo-400 mb-1'>
							Photo No: {_id}
						</h2>
						<h1 className='title-font text-lg font-medium text-cyan-800 mb-3'>
							{title}
						</h1>
						<p className='leading-relaxed text-slate-800 font-semibold font-serif'>
							{description.slice(0, 150) + '...'}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GalleryLoader;