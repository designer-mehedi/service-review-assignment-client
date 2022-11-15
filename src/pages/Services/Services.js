import React from 'react';
import { useLoaderData } from "react-router-dom";
import ServiceCards from "./ServiceCards";

const Services = () => {
    const services = useLoaderData();
    return (
		<div className="max-w-screen-xl mx-auto my-10 pl-3 md:pl-8">
			<div className=" text-center my-5">
				<h2 className="text-3xl md:text-5xl font-bold mb-3">Select Your Service</h2>
				<p className="md:text-lg">Choose any of our services as you need and hire us.</p>
			</div>
			<div className="grid md:grid-cols-3 gap-y-10 my-14">
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