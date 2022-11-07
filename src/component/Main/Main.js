import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
			<div className='bg-[#090a27]'>
				<Navbar></Navbar>
				<Outlet></Outlet>
				<Footer></Footer>
			</div>
		);
};

export default Main;