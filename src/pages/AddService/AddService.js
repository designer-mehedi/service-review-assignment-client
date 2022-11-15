import React from 'react';
// import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddService = () => {
    // const {} = useContext(AuthContext); 
    const handleAddService = e => {
        e.preventDefault();
        const form = e.target; 
        const name = form.name.value;
        const price = form.price.value;
        const img = form.img.value;  
        const description = form.description.value;
        console.log(name, price, img, description); 

		const addService = {
			name,
			price,
			img,
			description,
		}

		fetch("https://service-review-assignment-server.vercel.app/services", {
			method: "POST",
			headers: {
				"content-type" : "application/json"
			},
			body: JSON.stringify(addService)
		})
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			if(data.acknowledged) {
				alert("Service Added Successfully")
				form.reset(); 
			}
		})
		.catch(err => console.log(err));
    }



    return (
		<div>
			<h2 className="text-3xl md:text-5xl font-bold text-center my-5">Add Service</h2>
			<div className="md:w-1/2 mx-auto bg-indigo-100 p-10 mt-10 md:my-10">
				<form onSubmit={handleAddService}>
					<div className="mb-5">
						<div className="flex flex-col">
							<label className="text-lg font-bold mb-2">
								Service Name
							</label>
							<input
								className="px-2 py-3 outline-none border-none rounded-md"
								name="name"
								type="text"
								placeholder="Service Name"
							/>
						</div>
						<div className="flex flex-col">
							<label className="text-lg font-bold my-2">
								Price
							</label>
							<input
								className="px-2 py-3 outline-none border-none rounded-md"
								name="price"
								type="text"
								placeholder="Service Price"
							/>
						</div>
						<div className="mt-5 flex flex-col">
							<label className="text-lg font-bold mb-2">
								Image
							</label>
							<input
								type="text"
								className="px-2 py-3 w-full outline-none border-none rounded-md"
								name="img"
								placeholder="Enter Image url"
							/>
						</div>
					</div>
					<div>
						<label className="text-lg font-bold">
							Details
						</label>
						<div className="w-full mt-3">
							<textarea
								name="description"
								cols="30"
								rows="10"
								className="w-full block h-[100px] md:h-1/2 outline-none border-none rounded-md"
								required
							></textarea>
						</div>
					</div>
					<button className="text-center mx-auto w-full bg-blue-900 text-white py-2 mt-5 rounded-md">
						Add Service
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddService;