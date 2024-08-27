import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function OurPolicy() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center py-5">
			<div>
				<img
					src={assets.exchange_icon}
					alt="exchange_icon"
					className="w-12 m-auto"
				/>
				<p className="font-semibold pt-4">Easy Exchange Policy</p>
				<p className="text-gray-400">We offer hassle free exchange policy</p>
			</div>
			<div>
				<img
					src={assets.quality_icon}
					alt="quality_icon"
					className="w-12 m-auto"
				/>
				<p className="font-semibold pt-4">7 Days Return Policy</p>
				<p className="text-gray-400">We provide 7 days free return policy</p>
			</div>
			<div>
				<img
					src={assets.support_img}
					alt="support_img"
					className="w-12 m-auto"
				/>
				<p className="font-semibold pt-4">Best Customer Support</p>
				<p className="text-gray-400">We provide 24/7 customer support</p>
			</div>
		</div>
	);
}

export default OurPolicy;
