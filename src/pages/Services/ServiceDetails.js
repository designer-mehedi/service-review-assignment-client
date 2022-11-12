import React, { useContext } from 'react';
import { useLoaderData } from "react-router-dom";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ServiceDetails = () => {
	const {_id, name, price, img} = useLoaderData();
	const  {user} = useContext(AuthContext); 
	const handleReview = e => {
		e.preventDefault(); 
		const form = e.target;
		const userName = `${form.firstName.value} ${form.lastName.value}`;
		const email = user?.email || 'unregistered';
		const phone = form.phone.value;
		const comment = form.comment.value; 
		console.log(userName, email, phone, comment); 

		const review = {
			service: _id,
			serviceName: name,
			price,
			customer: userName,
			email,
			phone,
			comment,
			img
		}

		fetch(
			"https://service-review-assignment-server.vercel.app/reviews", {
				method: "POST",
				headers: {
					"content-type" : "application/json"
				},
				body: JSON.stringify(review)
			})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if(data.acknowledged) {
					alert('User Review Added')
				}
			})
			.catch(err => console.log(err));
			form.reset(); 
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
							<input className="px-2 py-3 outline-none" name="email" defaultValue={user?.email} type="email" placeholder="Your Email" readOnly required/>
							<input className="px-2 py-3 outline-none" name="phone" type="text" placeholder="Your Phone" required/>
							</div>
							<div className="w-full">
								<textarea name="comment" cols="30" rows="10" className="w-full block" required></textarea>
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