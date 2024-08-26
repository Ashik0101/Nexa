import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
function Navbar() {
	const [visible, setIsVisible] = useState(false);

	return (
		<nav className="flex items-center justify-between font-medium text-sm py-5">
			<Link to="/">
				<img src={assets.nexa_logo} alt="nexa_logo" className="w-24" />
			</Link>

			<ul className="hidden sm:flex text-sm gap-5">
				<NavLink to={"/"} className="flex flex-col items-center">
					<p>HOME</p>
					<hr className=" w-1/2 h-[2px] bg-gray-700 hidden" />
				</NavLink>
				<NavLink to={"/about"} className="flex flex-col items-center">
					<p>ABOUT</p>
					<hr className=" w-1/2 h-[2px] bg-gray-700 hidden" />
				</NavLink>
				<NavLink to={"/collection"} className="flex flex-col items-center">
					<p>COLLECTION</p>
					<hr className=" w-1/2 h-[2px] bg-gray-700 hidden" />
				</NavLink>
				<NavLink to={"/contact"} className="flex flex-col items-center">
					<p>CONTACT</p>
					<hr className=" w-1/2 h-[2px] bg-gray-700 hidden" />
				</NavLink>
			</ul>

			<div className="flex items-center gap-6">
				<img
					className="w-5 cursor-pointer"
					src={assets.search_icon}
					alt="search_icon"
				/>

				<div className="relative group">
					<img
						className="w-5 cursor-pointer"
						src={assets.profile_icon}
						alt="profile_icon"
					/>
					<div className="dropdown-menu hidden group-hover:block right-0 absolute pt-4 rounded">
						<div className="flex flex-col w-32 py-5 px-3 gap-3  bg-slate-100 text-gray-500">
							<p className="cursor-pointer hover:text-black">My Profile</p>
							<p className="cursor-pointer hover:text-black">Orders</p>
							<p className="cursor-pointer hover:text-black">Logout</p>
						</div>
					</div>
				</div>

				<Link to="/cart" className="relative">
					<img src={assets.cart_icon} className="w-5 min-w-4" alt="cart_icon" />

					<p className="absolute right-[-5px] bottom-[-5px] w-4 h-4 leading-4 aspect-square rounded-full bg-black text-white text-center text-[8px]">
						10
					</p>
				</Link>

				<img
					src={assets.menu_icon}
					alt="menu_icon"
					className="w-5 cursor-pointer sm:hidden"
					onClick={() => setIsVisible(true)}
				/>
			</div>

			{/* Sidebar for smaller screens */}
			<div
				className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
					visible ? "w-full" : "w-0"
				}`}
			>
				<div className="flex flex-col text-gray-600">
					<div
						onClick={() => setIsVisible(false)}
						className="flex items-center gap-3 p-3 cursor-pointer"
					>
						<img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
						<p>Back</p>
					</div>
					<NavLink
						onClick={() => setIsVisible(false)}
						className="py-2 pl-6 border"
						to="/"
					>
						HOME
					</NavLink>
					<NavLink
						onClick={() => setIsVisible(false)}
						className="py-2 pl-6 border"
						to="/collection"
					>
						COLLECTION
					</NavLink>
					<NavLink
						onClick={() => setIsVisible(false)}
						className="py-2 pl-6 border"
						to="/about"
					>
						ABOUT
					</NavLink>
					<NavLink
						onClick={() => setIsVisible(false)}
						className="py-2 pl-6 border"
						to="/contact"
					>
						CONTACT
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
