import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { BsDownload } from 'react-icons/bs';
import { AuthContext } from '../../context/AuthProvider';
// import { BsGoogle } from 'react-icons/bs';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

		const handleLogOut = () => {
			logOut()
				.then(() => {})
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
									<img className='w-[30px]' src='lens-logo.png' alt='' />
									<Link
										to='/home'
										className='btn btn-ghost normal-case text-md'
									>
										BD Photographer
									</Link>
								</div>
								<li>
									<Link to='/home' className='hover:text-secondary'>
										Home
									</Link>
								</li>
								<li>
									<Link to='/blog' className='hover:text-secondary'>
										Blog
									</Link>
								</li>
								<li>
									<Link to='/myreviews' className='hover:text-secondary'>
										My Reviews
									</Link>
								</li>
							</ul>
						) : (
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#1e2b47] text-slate-200 rounded-box w-52'
							>
								<div className='flex lg:hidden'>
									<img className='w-[30px]' src='lens-logo.png' alt='' />
									<Link
										to='/home'
										className='btn btn-ghost normal-case text-md'
									>
										BD Photographer
									</Link>
								</div>
								<li>
									<Link to='/home' className='hover:text-secondary'>
										Home
									</Link>
								</li>
								<li>
									<Link to='/blog' className='hover:text-secondary'>
										Blog
									</Link>
								</li>
							</ul>
						)}
					</div>
					<div className='lg:flex hidden'>
						<img className='w-[50px]' src='lens-logo.png' alt='' />
						<Link
							to='/home'
							className='btn btn-ghost normal-case text-lg hover:text-secondary'
						>
							BD Photographer
						</Link>
					</div>
				</div>
				<div className='navbar-center hidden lg:flex'>
					{user ? (
						<ul className='menu menu-horizontal p-0'>
							<li>
								<Link to='/home' className='hover:text-secondary'>
									Home
								</Link>
							</li>
							<li>
								<Link to='/blog' className='hover:text-secondary'>
									Blog
								</Link>
							</li>
							<li>
								<Link to='/myreviews' className='hover:text-secondary'>
									My Reviews
								</Link>
							</li>
							<li>
								<Link to='/addservices' className='hover:text-secondary'>
									Add Services
								</Link>
							</li>
						</ul>
					) : (
						<ul className='menu menu-horizontal p-0'>
							<li>
								<Link to='/home' className='hover:text-secondary'>
									Home
								</Link>
							</li>
							<li>
								<Link to='/blog' className='hover:text-secondary'>
									Blog
								</Link>
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
						<Link to='/login'>
							<button className='btn btn-secondary'>Login</button>
						</Link>
					)}
				</div>
			</div>
		);
};

export default Navbar;