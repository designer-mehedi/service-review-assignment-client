import React, { useContext } from 'react';
import { useLoaderData } from "react-router-dom";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ServiceDetails = () => {
	const {_id, name, price, img, description} = useLoaderData(); 
	const { user } = useContext(AuthContext);
	const handleReview = (e) => {
		e.preventDefault();
		const form = e.target;
		const userName = `${form.firstName.value} ${form.lastName.value}`;
		const email = user?.email || "unregistered";
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
			img,
			date: new Date().toLocaleString()
		};

		fetch("https://service-review-assignment-server.vercel.app/reviews", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(review),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					alert("User Review Added");
				}
			})
			.catch((err) => console.log(err));
		form.reset();
	};


    return (
		<div>
			<div className="">
				<div className="max-w-screen-xl mx-auto">
					<h2 className="text-3xl text-center my-10">
						Service details
					</h2>
					<div className="grid md:grid-cols-2 md:gap-x-10">
						<div>
							<img src={img} alt="" />
						</div>
						<div className="flex items-start flex-col justify-center">
							<h2>Service Name: {name}</h2>
							<p>Price: {price}</p>
							<p>{description}</p>
						</div>
					</div>
				</div>
				<div className="">
					<div className=" mx-auto bg-indigo-100 p-10 mt-10 w-full px-32">
						<div>
							<h2>Other Reviews</h2>
						</div>
						<form onSubmit={handleReview}>
							<div className="grid grid-cols-2 gap-5 mb-5">
								<input
									className="px-2 py-3 outline-none"
									name="firstName"
									type="text"
									placeholder="First Name"
								/>
								<input
									className="px-2 py-3 outline-none"
									name="lastName"
									type="text"
									placeholder="Last Name"
								/>
								<input
									className="px-2 py-3 outline-none"
									name="email"
									defaultValue={user?.email}
									type="email"
									placeholder="Your Email"
									readOnly
									required
								/>
								<input
									className="px-2 py-3 outline-none"
									name="phone"
									type="text"
									placeholder="Your Phone"
									required
								/>
							</div>
							<div className="w-full">
								<textarea
									name="comment"
									cols="30"
									rows="10"
									className="w-full block"
									required
								></textarea>
							</div>
							<button className="text-center mx-auto w-full bg-blue-900 text-white py-2 mt-5">
								Add Review
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;