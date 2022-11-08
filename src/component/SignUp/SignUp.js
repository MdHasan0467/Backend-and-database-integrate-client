import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
// import app from "../../firebase/firebase.init";
import { AuthContext } from "../../context/AuthProvider";

// const auth = getAuth(app);
const SignUp = () => {
	const [success, setSuccess] = useState(false);
	const [passwordError, setPasswordError] = useState('');
	const { createSignUp, userprofile } = useContext(AuthContext);

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
		<div className='grid lg:grid-cols-3 mx-5 lg:mx-0 mt-10 bg-white p-10 '>
			<img
				src='https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg'
				alt=''
			/>

			
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
