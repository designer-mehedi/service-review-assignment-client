import React from 'react';

const ReviewRow = ({review}) => {
    const { customer, email, serviceName, price, img, comment } = review;
    return (
		<>
			<tr>
				<th>
					<label>
						<button>X</button>
					</label>
				</th>
				<td>
					<div className="flex items-center space-x-3">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								<img
									src={img}
									alt="Avatar Tailwind CSS Component"
								/>
							</div>
						</div>
						<div>
							<div className="font-bold">{customer}</div>
							<div className="text-sm opacity-50">{email}</div>
						</div>
					</div>
				</td>
				<td>
					{serviceName}
					<br />
					<span className="badge badge-ghost badge-sm">
						Desktop Support Technician
					</span>
				</td>
				<td>{price}</td>
				<td>
					{comment}
				</td>
				<th>
					<button className="btn btn-ghost btn-xs">Status</button>
				</th>
			</tr>
		</>
	);
};

export default ReviewRow;