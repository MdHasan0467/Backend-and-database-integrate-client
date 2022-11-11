import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";


const SignUp = () => {
	useTitle('SignUp');
	const {  loading } = useContext(AuthContext);
	const [success, setSuccess] = useState(false);
	const [passwordError, setPasswordError] = useState('');
	const { createSignUp, userprofile } = useContext(AuthContext);
	//! Progress Loading...
	if (loading) {
		return <progress className='progress progress-error w-56'></progress>;
	}

	//! submit btn...
	const submitBtn = (e) => {
		e.preventDefault();
		setSuccess(false);
		setPasswordError('');

		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photoURL = form.profile.value;
		console.log(name, photoURL, email, password);

		//! Regex for password validation...
		if (password.length < 6) {
			setPasswordError('password should be at least 6 characters');
			return;
		}
		if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
			setPasswordError('Please provide at least two uppercase');
			return;
		}

		if (!/(?=.*[!@#$&*])/.test(password)) {
			setPasswordError('Please add at least one special character');
			return;
		}
		setPasswordError('');

		createSignUp(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);

				setSuccess(true);
				form.reset();
				updateUserDetails(name, photoURL);
			})

			.catch((error) => {
				console.error(error);
				setPasswordError(error.message);
			});
	};



	const updateUserDetails = (name, photoURL) => {
		userprofile(name, photoURL)
			.then(() => {
				console.log('Profile Updated');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className='grid lg:grid-cols-3 mx-5 lg:mx-0 mt-10 bg-white p-10 min-h-screen '>
			<img
				src='https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg'
				alt=''
			/>

			<div className='form lg:col-span-2 lg:w-[50%]  mt-[5%] border lg:mt-[1%] py-5 rounded-lg '>
				<div>
					<div className='grid grid-cols-1 lg:grid-cols-3'>
						<img
							className='lg:w-[50%] lg:h-[100%] w-[100px] h-[100px] rounded-lg mx-auto'
							src='https://cdn5.vectorstock.com/i/thumb-large/90/99/black-thin-line-sign-up-with-hand-vector-28279099.jpg'
							alt=''
						/>
						<h1 className='mt-7 lg:flex lg:justify-start lg:ml-12 col-span-2'>
							Sign up Now
						</h1>
					</div>
					<div className='flex justify-center '>
						<form onSubmit={submitBtn} className='mt-6 '>
							<div className='name'>
								<input
									className='block   py-1 px-7 mb-2 rounded-md'
									type='text'
									name='name'
									placeholder='Enter Your Name'
									required
								/>
							</div>
							<input
								className='block   py-1 px-7 mb-2 rounded-md'
								type='text'
								name='email'
								placeholder=' email '
								required
							/>
							<input
								className='block   py-1 px-7 mb-2 rounded-md'
								type='text'
								name='profile'
								placeholder='Profile URL '
								required
							/>
							<input
								className='block  py-1 px-7 rounded-md'
								type='password'
								name='password'
								placeholder=' password'
								required
							/>
							<p className='text-red-700'>
								<small>{passwordError}</small>
							</p>
							{success && (
								<p className='text-green-600'>
									<small>Registration Successful</small>
								</p>
							)}
							<button className='mt-5 text-gray-500 py-1 hover:text-black rounded-md px-3'>
								Sign Up
							</button>
						</form>
					</div>

					<p className='mt-5 lg:ml-3 px-2'>
						<small>
							Already have an account?
							<button className='ml-3 hover:text-blue-500 py-1 px-2 rounded-md'>
								<Link className=' px-2' to={'/login'}>
									Login
								</Link>
							</button>
						</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
