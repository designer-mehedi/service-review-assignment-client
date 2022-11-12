import React, { useContext } from 'react';
import { useLoaderData } from "react-router-dom";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ServiceDetails = () => {
	const {_id, name, price} = useLoaderData();
	const  {user} = useContext(AuthContext); 
	const handleReview = e => {
		e.preventDefault(); 
		const form = e.target;
		const name = `${form.firstName.value} ${form.lastName.value}`;
		const email = user?.email || 'unregistered';
		const phone = form.phone.value;
		const comment = form.comment.value; 
		console.log(name, email, phone, comment); 

		const review = {
			service: _id,
			serviceName: name,
			price,
			customer: name,
			email,
			phone,
			comment 
		}
	}
    return (
		<div>
			<div className="max-w-screen-xl mx-auto">
				<div>
					<h2>Service details</h2>
					<h3>{name}</h3>
				</div>
				<div className="">
					<div>
						<h2>Other Reviews</h2>
					</div>
					<div className="w-[80%] mx-auto bg-indigo-100 p-10 my-10">
						<form onSubmit={handleReview}>
							<div className="grid grid-cols-2 gap-5 mb-5">
							<input className="px-2 py-3 outline-none" name="firstName" type="text" placeholder="First Name" />
							<input className="px-2 py-3 outline-none" name="lastName" type="text" placeholder="Last Name" />
							<input className="px-2 py-3 outline-none" name="email" defaultValue={user?.email} type="email" placeholder="Your Email" readOnly/>
							<input className="px-2 py-3 outline-none" name="phone" type="text" placeholder="Your Phone" />
							</div>
							<div className="w-full">
								<textarea name="comment" cols="30" rows="10" className="w-full block"></textarea>
							</div>
							<button className="text-center mx-auto w-full bg-blue-900 text-white py-2 mt-5">Add Review</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;