import React from 'react';
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCards = ({service}) => {
    const {_id, img, name, price, description} = service; 
    return (
		<div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<PhotoProvider>
					<PhotoView src={img}>
						<img className="w-full h-56 rounded" src={img} alt="Shoes" />
					</PhotoView>
				</PhotoProvider>

				<div className="card-body">
					<h2 className="card-title">{name}</h2>
					<h4>Price: {price}</h4>
					<p>{description.slice(0, 75)}...</p>
					<div className="card-actions">
						<Link to={`/services/${_id}`}>
							<button className="btn bg-blue-600 px-8 py-2 text-white border-none rounded-md">Details</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCards;