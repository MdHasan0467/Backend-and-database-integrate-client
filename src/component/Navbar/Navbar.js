import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { BsDownload } from 'react-icons/bs';
import { AuthContext } from '../../context/AuthProvider';
// import { BsGoogle } from 'react-icons/bs';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const nav = useNavigate();

	const handleLogOut = () => {
			nav('/login');
			logOut()
				.then(() => {
					toast.error('Log Out!');
				})
				.catch((error) => console.error(error));
		};
    return (
			<div className='navbar bg-[#1e2b47] text-slate-200 rounded'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						{user ? (
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#1e2b47] text-slate-200 rounded-box w-52'
							>
								<div className='flex lg:hidden'>
									<img className='w-[30px]' src='logo.jpg' alt='' />
									<NavLink
										to='/home'
										className='btn btn-ghost normal-case text-md'
									>
										BD Photographer
									</NavLink>
								</div>
								<li>
									<NavLink to='/home' className='hover:text-secondary'>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink to='/blog' className='hover:text-secondary'>
										Blog
									</NavLink>
								</li>
								<li>
									<NavLink to='/myreviews' className='hover:text-secondary'>
										My Reviews
									</NavLink>
								</li>
							</ul>
						) : (
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#1e2b47] text-slate-200 rounded-box w-52'
							>
								<div className='flex lg:hidden'>
									<img className='w-[30px]' src='logo.jpg' alt='' />
									<NavLink
										to='/home'
										className='btn btn-ghost normal-case text-md'
									>
										BD Photographer
									</NavLink>
								</div>
								<li>
									<NavLink to='/home' className='hover:text-secondary'>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink to='/blog' className='hover:text-secondary'>
										Blog
									</NavLink>
								</li>
							</ul>
						)}
					</div>
					<div className='lg:flex hidden'>
						<img className='w-[50px] rounded-full' src='logo.jpg' alt='' />
						<NavLink
							to='/home'
							className='btn btn-ghost normal-case text-lg hover:text-secondary'
						>
							BD Photographer
						</NavLink>
					</div>
				</div>
				<div className='navbar-center hidden lg:flex'>
					{user ? (
						<ul className='menu menu-horizontal p-0'>
							<li>
								<NavLink to='/home' className='hover:text-secondary'>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to='/blog' className='hover:text-secondary'>
									Blog
								</NavLink>
							</li>
							<li>
								<NavLink to='/myreviews' className='hover:text-secondary '>
									My Reviews
								</NavLink>
							</li>
							<li>
								<NavLink to='/addservices' className='hover:text-secondary'>
									Add Services
								</NavLink>
							</li>
						</ul>
					) : (
						<ul className='menu menu-horizontal p-0'>
							<li>
								<NavLink to='/home' className='hover:text-secondary'>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to='/blog' className='hover:text-secondary'>
									Blog
								</NavLink>
							</li>
						</ul>
					)}
				</div>

				<div className='navbar-end '>
					{user ? (
						<div className='dropdown  dropdown-end'>
							<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
								<div className='w-[50px] rounded-full'>
									<img src={user.photoURL} />
								</div>
							</label>
							<ul
								tabIndex={0}
								className='mt-3 p-2 shadow menu  menu-compact dropdown-content bg-[#1e2b47] rounded-box w-52'
							>
								<li>
									<a className='justify-between hover:text-secondary'>
										{user.displayName}
										<span className='badge'>New</span>
									</a>
								</li>
								<li>
									<Link to='/about' className=' hover:text-secondary'>About</Link>
								</li>
								<li>
									<a className=' hover:text-secondary'>FAQ</a>
								</li>
								<li>
									<a className=' hover:text-secondary'>Settings</a>
								</li>
								<li>
									<a onClick={handleLogOut} className=' hover:text-secondary'>
										Logout
									</a>
								</li>
							</ul>
						</div>
					) : (
						<NavLink to='/login'>
							<button className='btn btn-secondary'>Login</button>
						</NavLink>
					)}
				</div>
			</div>
		);
};

export default Navbar;