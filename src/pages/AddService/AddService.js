import React from 'react';
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import FileBase64 from "react-file-base64";

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
			console.log(data)
		})
		.catch(err => console.log(err));
    }



    return (
		<div>
			<div className="w-[80%] mx-auto bg-indigo-100 p-10 my-10">
				<form onSubmit={handleAddService}>
					<div className="mb-5">
						<div className="flex flex-col">
							<label htmlFor="">Service Name</label>
							<input
								className="px-2 py-3 outline-none"
								name="name"
								type="text"
								placeholder="Service Name"
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="">Price</label>
							<input
								className="px-2 py-3 outline-none"
								name="price"
								type="text"
								placeholder="Service Price"
							/>
						</div>
						<div className="mt-5 flex flex-col">
							<label htmlFor="">Image</label>
							<input
								type="text"
								className="px-2 py-3 w-full rounded"
								name="img"
								placeholder="Enter Image url"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="">Details</label>
						<div className="w-full">
							<textarea
								name="description"
								cols="30"
								rows="10"
								className="w-full block"
								required
							></textarea>
						</div>
					</div>
					<button className="text-center mx-auto w-full bg-blue-900 text-white py-2 mt-5">
						Add Service
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddService;