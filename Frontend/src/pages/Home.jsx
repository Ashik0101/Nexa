import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Title from "../components/Title";
import BestSeller from "../components/BestSeller";

const Home = () => {
	return (
		<>
			<Hero />
			<LatestCollection />
			<BestSeller />
		</>
	);
};

export default Home;
