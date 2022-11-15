import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://service-review-assignment-server.vercel.app/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
    }, [])

    return (
		<>
			<div className="max-w-screen-xl mx-auto my-10">
				<div className="text-center my-5">
					<h2 className="text-4xl font-bold">Our Services</h2>
				</div>
				<div className="grid md:grid-cols-3 pl-3 gap-y-5">
					{services.map((service) => (
						<ServiceCard
							key={service._id}
							service={service}
						></ServiceCard>
					))}
				</div>
				<div className="text-center mt-14 text-xl">
					<Link to='/services'>
						<button className="bg-blue-500 px-5 py-3 text-white font-semibold rounded-lg">
							Load More
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Services;