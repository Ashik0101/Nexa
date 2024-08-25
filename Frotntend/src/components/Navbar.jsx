import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
function Navbar() {
	return (
		<nav className="flex items-center justify-between font-medium text-sm py-5 px-10">
			<img src={assets.nexa_logo} alt="nexa_logo" className="w-24" />

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

				<div className="relative">
					<img src={assets.cart_icon} className="w-5 min-w-4" alt="cart_icon" />

					<div className="absolute right-[-5px] bottom-[-5px] w-4 h-4 leading-4 aspect-square rounded-full bg-black text-white text-center text-[8px]">
						10
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
