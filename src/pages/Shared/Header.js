import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/0e48e863afa406aa0bda03c5278e8e2e.png"
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
	const {user, logOut} = useContext(AuthContext); 
	const navigate = useNavigate();

	const handleLogOut = () => {
		logOut(); 
		navigate("/"); 
		// if(user !== user.email) {
		// 	navigate('/'); 
		// }
	}
    const menuItems = (
		<>
			<li>
				<Link to="/home">Home</Link>
			</li>
			<li>
				<Link to="/services">Services</Link>
			</li>
			{/* <li><Link to='/reviews'>My Review</Link></li> */}
			{user?.email ? (
				<>
					<li>
						<Link to="/reviews">My Review</Link>
					</li>
					<li>
						<Link to="/add-service">Add Service</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<button
						onClick={handleLogOut}
						className="bg-blue-600 block w-20 h-8 text-white rounded-full text-sm font-bold"
					>
						Log Out
					</button>
					<span className="">
						<div
							className="tooltip tooltip-right tooltip-info"
							data-tip={user?.email}
						>
							<button className="">
								<img
									className="w-7 h-7"
									src="https://abbeynord.com/profile_placeholder.png"
									alt=""
								/>
							</button>
						</div>
					</span>
				</>
			) : (
				<div className="flex gap-5">
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/signup">Sign Up</Link>
					</li>
				</div>
			)}
		</>
	);

    return (
		<div className="bg-blue-900">
			<div className="navbar  max-w-screen-xl mx-auto text-white">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							{menuItems}
						</ul>
					</div>
					<Link className="normal-case text-xl"><img className="w-20" src={logo} alt="" /></Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu-horizontal p-0 gap-5">{menuItems}</ul>
				</div>
				<div className="navbar-end">
					<button className="bg-blue-600 px-5 py-3 text-white rounded-md">
						Contact Us
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;