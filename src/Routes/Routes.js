import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Details from '../component/Details/Details';
import Error from '../component/Error/Error';
import Home from '../component/Home/Home';
import Main from '../component/Main/Main';
import Services from '../component/Services/Services';

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
						fetch(`http://localhost:5000/services/${params._id}`),
				},
				{
					path: '/services',
					element: <Services></Services>,
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