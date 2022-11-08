import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    const { loading } = useContext(AuthContext);
    useTitle('Add Services');

    if (loading) {
			return <progress className='progress progress-error w-56'></progress>;
		}
    return (
			<div>
				<h1>Add Services</h1>
				<form>
					<input type='text' name='img' id='' />
					<br />
					<input type='text' name='title' id='' />
					<br />
					<input type='text' name='fee' id='' />
					<br />
					<input type='text' name='description' id='' />
					<br />
					<button>Add Services</button>
				</form>
			</div>
		);
};

export default AddServices;