import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext); 

    const handleSignup = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset(); 
            if(user) {
                alert('Succesfully registered'); 
            }
        })
        .catch(err => console.error(err)); 
	};

    return (
        <div className="max-w-screen-xl mx-auto h-screen flex items-center">
            <form onSubmit={handleSignup} className="shadow-md mx-auto py-10 px-10 w-[400px] md:border rounded-lg">
                <h2 className="text-center mb-5 text-2xl font-bold">Sign Up</h2>
                <div className="flex flex-col mb-4">
					<label htmlFor="" className="mb-2 font-medium text-lg">Name</label>
                    <input type="text" className="px-3 py-2 outline-none border rounded-md" name="" placeholder="Your Name"/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="" className="mb-2 font-medium text-lg">Email</label>
                    <input type="email" className="px-3 py-2 outline-none border rounded-md" name="email" placeholder="Your Email"/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="" className="mb-2 font-medium text-lg">Password</label>
                    <input type="password" className="px-3 py-2 outline-none border rounded-md" name="password" placeholder="Your Password"/>
				</div>
                <div>
                    <button className="bg-blue-600 px-5 py-2 w-full text-white rounded-md mb-2">Sign Up</button>
                    <span>Already have an account? <Link to='/login'>Login</Link></span>
                </div>
			</form>
        </div>
    );
};

export default SignUp;