import React from 'react';
import { PhotoProvider, PhotoView } from "react-photo-view";


const ServiceCard = ({service}) => {
    console.log(service); 
    const {img, name, description, price} = service;
    return (
		<div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<PhotoProvider>
					<PhotoView src={img}>
						<img className="w-full h-56" src={img} alt="Shoes" />
					</PhotoView>
				</PhotoProvider>

				<div className="card-body">
					<h2 className="card-title">{name}</h2>
					<h4>{price}</h4>
					<p>{description}</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;