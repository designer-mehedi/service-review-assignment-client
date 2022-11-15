import React from 'react';

const Banner = () => {
    return (
		<div className="">
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Quality Choice</h1>
						<p className="mb-5">
							Photography is the art of capturing light with a camera, usually via a digital sensor or film, to create an image with the right camera. 
						</p>
						<button className="btn btn-primary rounded font-bold letter-bg text-white px-12 hover:border-blue-500 hover:border-2 border-transparent">Hire Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;