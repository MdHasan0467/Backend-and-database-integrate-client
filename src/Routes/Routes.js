import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
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
						path: '/services',
						element:<Services></Services>
					},
				],
			},
		]);
    return (
			<div>
				<RouterProvider router={router}></RouterProvider>
			</div>
		);
};

export default Routes;