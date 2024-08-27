import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
	return (
		<div>
			<div className="flex flex-col sm:grid grid-cols-[3fr_2fr_2fr] gap-14 my-10 mt-40 text-sm">
				<div>
					<img src={assets.nexa_logo} className="mb-5  mt-1.5 w-24" alt="" />
					<p className="w-full md:w-2/3 text-gray-600">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
						consequuntur sed facere, sapiente minus atque ad vel qui cumque
						tenetur magnam iusto.
					</p>
				</div>

				<div>
					<p className="text-xl font-medium mb-5">COMPANY</p>
					<ul className="flex flex-col gap-1 text-gray-600">
						<li>Home</li>
						<li>About us</li>
						<li>Delivery</li>
						<li>Privacy policy</li>
					</ul>
				</div>

				<div>
					<p className="text-xl font-medium mb-5">GET IN TOUCH</p>
					<ul className="flex flex-col gap-1 text-gray-600">
						<li>+1-212-456-7890</li>
						<li>contact@nexa-superstore.com</li>
					</ul>
				</div>
			</div>
			<div>
				<hr />
				<p className="text-center text-sm mb-5">
					Copyright 2024@ nexa-superstore.com - All rights reserved!
				</p>
			</div>
		</div>
	);
};

export default Footer;
