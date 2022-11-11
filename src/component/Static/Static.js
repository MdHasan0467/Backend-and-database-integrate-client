import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Static = () => {
    return (
			<div>
				<section className='text-gray-400 bg-gray-900 body-font'>
					<div className='container px-5 py-24 mx-auto flex flex-wrap'>
						<div className='flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10'>
							<div className='w-full sm:p-4 px-4 mb-6'>
								<h1 className='title-font font-medium text-xl mb-2 text-white'>
									Creative wedding photography
								</h1>
								<div className='leading-relaxed'>
									Finding the perfect wedding photographer in Bangladesh should
									be easy, thanks to a large number of creative photographers in
									the country. Once you’ve narrowed down your wedding-related
									search, be sure to visit some photographer in their
									photography studio. This is the most reliable way to choose as
									you will be able to see his or her wedding portfolio.
								</div>
							</div>
							<div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
								<h2 className='title-font font-medium text-3xl text-white'>
									2.7K
								</h2>
								<p className='leading-relaxed'>Review</p>
							</div>
							<div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
								<h2 className='title-font font-medium text-3xl text-white'>
									$ 500k
								</h2>
								<p className='leading-relaxed'>Price</p>
							</div>
							<div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
								<h2 className='title-font font-medium text-3xl text-white'>
									wedding
								</h2>
								<p className='leading-relaxed'>Type</p>
							</div>
							<div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
								<h2 className='title-font font-medium text-3xl text-white'>
									3 Days
								</h2>
								<p className='leading-relaxed'>Duration</p>
							</div>
						</div>
						<div className='lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0'>
							<PhotoProvider>
								<PhotoView src='https://cdn0.weddingwire.in/article/9086/3_2/960/jpg/16809-creative-wedding-photography-avinash-dhoundhiyal-photography-lead-image.jpeg'>
									<img
										className='object-cover object-center w-full h-full'
										src='https://cdn0.weddingwire.in/article/9086/3_2/960/jpg/16809-creative-wedding-photography-avinash-dhoundhiyal-photography-lead-image.jpeg'
										alt='stats'
									/>
								</PhotoView>
							</PhotoProvider>
						</div>
					</div>
				</section>
			</div>
		);
};

export default Static;