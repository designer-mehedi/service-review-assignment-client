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
				// console.log(data);
				if (data.acknowledged) {
					alert("User Review Added");
					form.reset();
				}
			})
			.catch((err) => console.log(err));
	};


    return (
		<div>
			<div className="">
				<div className="max-w-screen-xl mx-auto">
					<h2 className="text-center my-10 text-3xl md:text-5xl font-bold">
						Service details
					</h2>
					<div className="grid md:grid-cols-2 md:gap-x-10 border shadow-lg rounded-lg mx-5 p-3">
						<div>
							<img src={img} alt="" />
						</div>
						<div className="flex items-start flex-col justify-center">
							<h2 className="mb-3">
								<span className="text-2xl text-violet-900 font-semibold">
									{name}
								</span>
							</h2>
							<p className="mb-3">
								<span className="text-2xl font-bold">
									Price: </span>
								<span className="text-xl text-violet-900 font-semibold">
									{price}
								</span>
							</p>
							<p>{description}</p>
						</div>
					</div>
				</div>
				<div className="">
					<div className=" mx-auto bg-indigo-100 md:p-10 py-10 mt-10 w-full px-5 md:px-32">
						<h2 className="text-3xl font-bold text-center mb-10">Add a review</h2>
						<form onSubmit={handleReview}>
							<div className="grid md:grid-cols-2 gap-5 mb-5">
								<input
									className="px-2 py-3 outline-none border-none rounded-md"
									name="firstName"
									type="text"
									placeholder="First Name"
								/>
								<input
									className="px-2 py-3 outline-none border-none rounded-md"
									name="lastName"
									type="text"
									placeholder="Last Name"
								/>
								<input
									className="px-2 py-3 outline-none border-none rounded-md"
									name="email"
									defaultValue={user?.email}
									type="email"
									placeholder="Your Email"
									readOnly
									required
								/>
								<input
									className="px-2 py-3 outline-none border-none rounded-md"
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
									className="w-full block outline-none border-none rounded-md"
									required
								></textarea>
							</div>
							<button className="text-center mx-auto w-full bg-blue-900 text-white py-2 mt-5 rounded-md">
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