import React from 'react';

const Blog = () => {
    return (
			<div className='m-10'>
				<div
					tabIndex={0}
					className='collapse collapse-plus border border-base-300 my-2 '
				>
					<div className='collapse-title text-xl font-medium bg-[#1e2b47] text-slate-200'>
						Focus me to see content
					</div>
					<div className='collapse-content bg-white text-[#121258]'>
						<p>tabIndex={0} attribute is necessary to make the div focusable</p>
					</div>
				</div>

				<div
					tabIndex={0}
					className='collapse collapse-plus border border-base-300 my-2 bg-base-100 '
				>
					<div className='collapse-title text-xl font-medium bg-[#1e2b47] text-slate-200'>
						Focus me to see content
					</div>
					<div className='collapse-content bg-white text-[#121258]'>
						<p>tabIndex={0} attribute is necessary to make the div focusable</p>
					</div>
				</div>

				<div
					tabIndex={0}
					className='collapse collapse-plus border border-base-300 my-2 bg-base-100 '
				>
					<div className='collapse-title text-xl font-medium bg-[#1e2b47] text-slate-200'>
						Focus me to see content
					</div>
					<div className='collapse-content bg-white text-[#121258]'>
						<p>tabIndex={0} attribute is necessary to make the div focusable</p>
					</div>
				</div>

				<div
					tabIndex={0}
					className='collapse collapse-plus border border-base-300 my-2 bg-base-100 '
				>
					<div className='collapse-title text-xl font-medium bg-[#1e2b47] text-slate-200'>
						Focus me to see content
					</div>
					<div className='collapse-content bg-white text-[#121258]'>
						<p>tabIndex={0} attribute is necessary to make the div focusable</p>
					</div>
				</div>
			</div>
		);
};

export default Blog;