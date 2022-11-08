import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddServices from '../component/AddServices/AddServices';
import Blog from '../component/Blog/Blog';
import Details from '../component/Details/Details';
import Error from '../component/Error/Error';
import Home from '../component/Home/Home';
import LogIn from '../component/LogIn/LogIn';
import Main from '../component/Main/Main';
import MyReview from '../component/MyReview/MyReview';
import PrivateRoute from '../component/PrivateRoute/PrivateRoute';
import Services from '../component/Services/Services';
import SignUp from '../component/SignUp/SignUp';

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main></Main>,
			children: [
				{
					path: '/',
					element: <Home></Home>,
				},
				{
					path: '/home',
					element: <Home></Home>,
				},
				{
					path: '/service/:id',
					element: <Details></Details>,
					loader: ({ params }) =>
						fetch(`http://localhost:5000/service/${params.id}`),
				},
				{
					path: '/services',
					element: <Services></Services>,
				},
				{
					path: '/myreviews',
					element: (
						<PrivateRoute>
							<MyReview></MyReview>
						</PrivateRoute>
					),
				},
				{
					path: '/addservices',
					element: (
						<PrivateRoute>
							<AddServices></AddServices>
						</PrivateRoute>
					),
				},
				{
					path: '/blog',
					element: <Blog></Blog>,
				},
				{
					path: '/login',
					element: <LogIn></LogIn>,
				},
				{
					path: '/signup',
					element: <SignUp></SignUp>,
				},
			],
		},
		{
			path: '*',
			element: <Error></Error>,
		},
	]);
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
};

export default Routes;
