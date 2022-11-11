import React from 'react';

const Slider = () => {
    return (
			<div className='flex justify-center'>
				<div className='carousel md:w-[50%] h-[400px] rounded-xl'>
					<div id='slide1' className='carousel-item relative w-full'>
						<img
							alt=''
							src='https://i0.wp.com/pixelpluck.com/wp-content/uploads/2016/03/photography-slogans-one-liners.jpeg?fit=1080%2C647&ssl=1'
							className='w-full'
					/>
					
						<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
							<a href='#slide4' className='btn btn-circle'>
								❮
							</a>
							<a href='#slide2' className='btn btn-circle'>
								❯
							</a>
						</div>
					</div>
					<div id='slide2' className='carousel-item relative w-full'>
						<img
							alt=''
							src='http://bdphotographers.com/upload/cityimages/1485350528rajshai.jpg'
							className='w-full'
						/>
						<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
							<a href='#slide1' className='btn btn-circle'>
								❮
							</a>
							<a href='#slide3' className='btn btn-circle'>
								❯
							</a>
						</div>
					</div>
					<div id='slide3' className='carousel-item relative w-full'>
						<img
							alt=''
							src='https://i.ytimg.com/vi/ejNIow5DPUM/maxresdefault.jpg'
							className='w-full'
						/>
						<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
							<a href='#slide2' className='btn btn-circle'>
								❮
							</a>
							<a href='#slide4' className='btn btn-circle'>
								❯
							</a>
						</div>
					</div>
					<div id='slide4' className='carousel-item relative w-full'>
						<img
							alt=''
							src='https://c.files.bbci.co.uk/0426/production/_123626010_d7b3355b-1d4f-4871-854f-bb511841a9a9.jpg'
							className='w-full'
						/>
						<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
							<a href='#slide3' className='btn btn-circle'>
								❮
							</a>
							<a href='#slide1' className='btn btn-circle'>
								❯
							</a>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Slider;