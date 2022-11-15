import React from 'react';

const About = () => {
    return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<div className="md:w-1/2 border">
						<img
							src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/03/camera-lens-camera-and-lens.jpg"
							className="rounded-lg shadow-2xl w-full h-[300px] md:h-1/2"
							alt=""
						/>
					</div>
					<div className="md:w-1/2 text-center">
						<h1 className="text-5xl font-bold">About Us</h1>
						<p className="py-6">
							We would like to give you a unique photography and
							video experience, built to serve you best and
							capture your special moments for you and your
							families creatively and beautifully. We are Always
							Ready for a Challenge.
						</p>
						<button className="btn bg-blue-600 px-5 py-3 rounded border-none text-white">
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;