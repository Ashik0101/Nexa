import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
function BestSeller() {
	const { products } = useContext(ShopContext);
	const [bestSeller, setBestSeller] = useState([]);

	useEffect(() => {
		const bestSellerProducts = products.filter(
			(item) => item.bestseller === true
		);
		setBestSeller(bestSellerProducts.slice(0, 5));
	}, []);
	return (
		<div className="my-10">
			<div className="text-center text-3xl">
				<Title text1={"BEST"} text2={"SELLER"} />
				<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
					praesentium tempore corrupti facere dicta natus officiis explicabo
				</p>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5">
				{bestSeller.map((item) => (
					<ProductItem
						key={item._id}
						id={item._id}
						image={item.image}
						name={item.name}
						price={item.price}
					/>
				))}
			</div>
		</div>
	);
}

export default BestSeller;
