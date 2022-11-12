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

export default Banner;