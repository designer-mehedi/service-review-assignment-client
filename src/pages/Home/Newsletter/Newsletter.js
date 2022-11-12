import React from 'react';

const Newsletter = () => {
    return (
        <div className="max-w-screen-xl mx-auto text-center my-10 bg-blue-900 text-white py-10 rounded-lg">
            <h2 className="text-4xl font-bold mb-3">Subscribe to our newsletter</h2>
            <p className="mb-5">You will get occassional updates about our services and more...</p>
            <input type="email" className="w-96 px-2 py-2 text-black outline-none" />
            <button className="block mx-auto bg-violet-500 px-7 py-3 mt-4 rounded-md text-lg font-bold uppercase">Subscribe</button>
        </div>
    );
};

export default Newsletter;