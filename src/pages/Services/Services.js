import React from 'react';
import { useLoaderData } from "react-router-dom";
import ServiceCards from "./ServiceCards";

const Services = () => {
    const services = useLoaderData();
    console.log(services);  
    return (
		<div className="max-w-screen-xl mx-auto my-10">
			<div className="grid md:grid-cols-3 gap-y-10">
				{services.map((service) => (
					<ServiceCards
						key={service._id}
						service={service}
					></ServiceCards>
				))}
			</div>
		</div>
	);
};

export default Services;