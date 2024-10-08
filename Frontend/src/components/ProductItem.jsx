import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ id, image, name, price }) {
	const { currency } = useContext(ShopContext);
	return (
		<Link className="text-gra-700 cursor-pointer" to={`/product/${id}`}>
			<div>
				<div className="overflow-hidden">
					<img
						className="hover:scale-110 transition ease-in-out"
						src={image[0]}
						alt=""
					/>
				</div>
				<p className="pt-3 pb-1 textsm">{name}</p>
				<p className="text-sm font-medium">
					{currency}
					{price}
				</p>
			</div>
		</Link>
	);
}

export default ProductItem;
