import React from 'react';

const GalleryLoader = ({ service }) => {
      const { _id, img, title, description } = service;
	return (
		<div>
			<div>
				<div className='flex relative'>
					<img
						alt='gallery'
						className='absolute inset-0 w-full h-full object-cover object-center'
						src={img}
					/>
					<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-gray-900 opacity-0 hover:opacity-100'>
                        <h2 className='tracking-widest text-sm title-font font-medium text-indigo-400 mb-1'>Photo No: { _id}</h2>
						<h1 className='title-font text-lg font-medium text-white mb-3'>
							{title}
						</h1>
						<p className='leading-relaxed text-orange-500'>
							{description.slice(0, 150) + '...'}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GalleryLoader;