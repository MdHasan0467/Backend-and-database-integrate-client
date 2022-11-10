import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
			<footer className='footer p-10 bg-[#1e2b47] text-slate-200'>
				<div>
					<div className='flex'>
						<img className='w-[50px] rounded-full mr-5' src='logo.jpg' alt='' />
						<Link
							to='/home'
							className='footer-title flex items-center text-secondary text-xl'
						>
							BD Photographer
						</Link>
					</div>
					<div className='form-control lg:block hidden w-80'>
						<label className='label'>
							<span className='label-text'>Enter your email address</span>
						</label>
						<div className='relative'>
							<input
								type='text'
								placeholder='username@site.com'
								className='input input-bordered w-full pr-16'
							/>
							<button className='btn btn-primary absolute top-0 right-0 rounded-l-none'>
								Subscribe
							</button>
						</div>
					</div>
				</div>
				<div>
					<span className='footer-title'>Services</span>
					<a href='' className='link link-hover'>
						Wedding Photography
					</a>
					<a href='' className='link link-hover'>
						Occasions Photography
					</a>
					<a href='' className='link link-hover'>
						Photo Editing
					</a>
					<a href='' className='link link-hover'>
						Others
					</a>
				</div>

				<div>
					<span className='footer-title'>Legal</span>
					<a href='' className='link link-hover'>
						Terms of use
					</a>
					<a href='' className='link link-hover'>
						Privacy policy
					</a>
					<a href='' className='link link-hover'>
						Cookie policy
					</a>
				</div>
				<div className='form-control block lg:hidden w-80'>
					<label className='label'>
						<span className='label-text'>Enter your email address</span>
					</label>
					<div className='relative'>
						<input
							type='email'
							name='email'
							id=''
							className='input input-bordered w-full pr-16'
						/>
						<button className='btn btn-primary absolute top-0 right-0 rounded-l-none'>
							Subscribe
						</button>
					</div>
				</div>
			</footer>
		);
};

export default Footer;