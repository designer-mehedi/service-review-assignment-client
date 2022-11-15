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
						<img className="w-full h-56 rounded" src={img} alt="Shoes" />
					</PhotoView>
				</PhotoProvider>
				<div className="card-body">
					<h2 className="card-title">{name}</h2>
					<h4>Price: {price}</h4>
					<p>{description.slice(0, 75)}...</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;