import React from 'react';

const ServiceCard = ({service}) => {
    console.log(service); 
    const {img, name, price, description} = service;
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
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;