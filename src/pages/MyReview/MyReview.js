import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReview = () => {
    const {user} = useContext(AuthContext); 
    const [reviews, setReviews] = useState([]); 

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => console.error(err));
    }, [user?.email])

    return (
        <div>
           <div className="overflow-x-auto w-full max-w-screen-xl mx-auto">
            <h2>You have {reviews.length} orders</h2>
            <table className="table w-full">
            <thead>
                <tr>
                <th>
                    
                </th>
                <th>Name</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Reviews</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    reviews.map(review => <ReviewRow
                    key={review._id}
                    review={review}
                    ></ReviewRow>)
                }
            </tbody>
            </table>
            </div> 
        </div>
    );
};

export default MyReview;