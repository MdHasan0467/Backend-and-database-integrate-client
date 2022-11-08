import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
	useTitle('Blog');
    return (
			<div className='m-10'>
				<div
					tabIndex={0}
					className='collapse collapse-plus border border-base-300 my-2 '
				>
					<div className='collapse-title text-xl font-medium bg-[#1e2b47] text-slate-200'>
						Difference between SQL and NoSQL
					</div>
					<div className='collapse-content bg-white text-[#121258]'>
						<p>
							A SQL Database follows a table like structure which can have an
							unlimited number of rows and every data present inside the
							database is properly structured with Predefined Schemas, it is
							basically used to manipulate Relational Databases Management
							Systems.
						</p>
						<p className='mt-2'>
							A NoSQL Database is a Distributed Database where the data is very
							unstructured with Dynamic Schema. Unlike SQL it cannot have
							unlimited rows but it follows a Standard Schema Definition and can
							store all sorts of data models with large distributed data in the
							form of key-value pairs, graph databases, documents or wide-column
							stores.
						</p>
					</div>
				</div>

				<div
					tabIndex={0}
					className='collapse collapse-plus border border-base-300 my-2 bg-base-100 '
				>
					<div className='collapse-title text-xl font-medium bg-[#1e2b47] text-slate-200'>
						What is JWT, and how does it work?
					</div>
					<div className='collapse-content bg-white text-[#121258]'>
						<p>
							JSON Web Token (JWT) is an open standard (RFC 7519) for securely
							transmitting information between parties as JSON object. It is
							compact, readable and digitally signed using a private key/ or a
							public key pair by the Identity Provider(IdP). So the integrity
							and authenticity of the token can be verified by other parties
							involved. The purpose of using JWT is not to hide data but to
							ensure the authenticity of the data. JWT is signed and encoded,
							not encrypted.
						</p>
					</div>
				</div>

				<div
					tabIndex={0}
					className='collapse collapse-plus border border-base-300 my-2 bg-base-100 '
				>
					<div className='collapse-title text-xl font-medium bg-[#1e2b47] text-slate-200'>
						What is the difference between javascript and NodeJS?
					</div>
					<div className='collapse-content bg-white text-[#121258]'>
						<p>
							JavaScript’s first version was launched in 1995 and it was
							developed by Brendan Eich of Netscape (then called LiveScript). As
							discussed earlier, JavaScript is a high-level programming language
							that has all the functionalities normally a programming language
							has. JavaScript is an Object-oriented programming language that
							can be used on the client-side as well as on the server-side and
							developers not only use it for creating web pages but also it is
							used for game development and mobile app development.
						</p>
						<p className='mt-2'>
							Node.js was first introduced in 2009 developed by Ryan Dahl and is
							a runtime environment for JavaScript built on Google’s v8 engine
							whose main purpose is to run JavaScript on the server and hence
							JavaScript can be executed outside of the browser. The nicest part
							about Node.js is that it never blocks I/O, is event-driven, and
							can be used to create highly scalable apps. In Node.js everything
							is a module and using these modules developers make use of Node.js
							in creating web APIs, Rest API servers, command-line applications,
							and real-time chat applications.
						</p>
					</div>
				</div>

				<div
					tabIndex={0}
					className='collapse collapse-plus border border-base-300 my-2 bg-base-100 '
				>
					<div className='collapse-title text-xl font-medium bg-[#1e2b47] text-slate-200'>
						How does NodeJS handle multiple requests at the same time?
					</div>
					<div className='collapse-content bg-white text-[#121258]'>
						<p>
							NodeJS receives multiple client requests and places them into
							EventQueue. NodeJS is built with the concept of event-driven
							architecture. NodeJS has its own EventLoop which is an infinite
							loop that receives requests and processes them.
						</p>
					</div>
				</div>
			</div>
		);
};

export default Blog;