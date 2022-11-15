import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReview = () => {
	const { user } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);

	// https://service-review-assignment-server.vercel.app/reviews?email=${user?.email}

	useEffect(() => {
		fetch(
			`https://service-review-assignment-server.vercel.app/reviews?email=${user?.email}`
		)
			.then((res) => res.json())
			.then((data) => setReviews(data))
			.catch((err) => console.error(err));
	}, [user?.email]);

	const handleDelete = (id) => {
		const proceed = window.confirm("Are you want to delete this review");
		if (proceed) {
			fetch(
				`https://service-review-assignment-server.vercel.app/reviews/${id}`,
				{
					method: "DELETE",
				}
			)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						alert("Review deleted successfully");
						const remaining = reviews.filter(
							(ord) => ord._id !== id
						);
						setReviews(remaining);
					}
				});
		}
	};

	return (
		<div>
			<div className="overflow-x-auto w-full max-w-screen-xl mx-auto h-screen">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Service Name</th>
							<th>Price</th>
							<th>Reviews</th>
							<th>Published</th>
						</tr>
					</thead>
					<tbody>
						{reviews.map((review) => (
							<ReviewRow
								key={review._id}
								review={review}
								handleDelete={handleDelete}
							></ReviewRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyReview;