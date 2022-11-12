import React from 'react';
import ReviewRow from "./ReviewRow";

const MyReview = () => {
    return (
        <div>
           <div className="overflow-x-auto w-full max-w-screen-xl mx-auto">
            <table className="table w-full">
            <thead>
                <tr>
                <th>
                    <label>
                    <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <ReviewRow/>
            </tbody>
            </table>
            </div> 
        </div>
    );
};

export default MyReview;