import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Title from "../components/Title";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
	return (
		<>
			<Hero />
			<LatestCollection />
			<BestSeller />
			<OurPolicy />
		</>
	);
};

export default Home;
