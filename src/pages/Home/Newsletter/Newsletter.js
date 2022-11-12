import React from 'react';

const Newsletter = () => {
    return (
        <div className="max-w-screen-xl mx-auto text-center my-10 letter-bg text-white py-20 rounded-lg">
            <h2 className="text-4xl font-bold mb-3">Subscribe to our newsletter</h2>
            <p className="mb-10">You will get occassional updates about our services and more...</p>
            <input type="email" className="w-[470px] px-2 py-2 text-black outline-none" />
            <button className="block mx-auto bg-violet-500 px-7 py-3 mt-4 rounded-md text-lg font-bold uppercase">Subscribe</button>
        </div>
    );
};

export default Newsletter;