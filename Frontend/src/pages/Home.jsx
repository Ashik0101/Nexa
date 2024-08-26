import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Title from "../components/Title";
import Bestseller from "../components/Bestseller";

const Home = () => {
	return (
		<>
			<Hero />
			<LatestCollection />
			<Bestseller />
		</>
	);
};

export default Home;
