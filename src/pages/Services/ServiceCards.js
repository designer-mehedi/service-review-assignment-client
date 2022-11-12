import React from 'react';
import { Link } from "react-router-dom";

const ServiceCards = ({service}) => {
    const {_id, img, name, price, description} = service; 
    return (
		<div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img className="w-full h-56" src={img} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{name}</h2>
					<h4>{price}</h4>
					<p>{description}</p>
					<div className="card-actions">
						<Link to={`/services/${_id}`}>
							<button className="btn btn-primary">Details</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCards;