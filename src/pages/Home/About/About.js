import React from 'react';
import about from "../../../assets/nG7XH3x4tddAF3y3mQt5pm.jpg"

const About = () => {
    return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<div className="w-1/2 border">
						<img
							src={about}
							className="rounded-lg shadow-2xl w-full h-[400px]"
							alt=""
						/>
					</div>
					<div className="w-1/2">
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;