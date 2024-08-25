import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollection() {
	const { products } = useContext(ShopContext);

	const [latestProducts, setLatestProducts] = useState([]);

	useEffect(() => {
		setLatestProducts(products.slice(0, 10));
	}, []);

	return (
		<div className="my-10">
			<div className="text-center py-4 text-3xl">
				<Title text1={"LATEST"} text2={"COLLECTION"} />
				<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
					repellat velit, enim nobis iure quo provident praesentium harum
					similique eritatis.
				</p>
			</div>

			{/* Rendering Products */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cls-5 gap-4 gap-y-6">
				{latestProducts.map((item, index) => (
					<ProductItem
						key={item._id}
						id={item._id}
						image={item.image}
						price={item.price}
						name={item.name}
					/>
				))}
			</div>
		</div>
	);
}

export default LatestCollection;
