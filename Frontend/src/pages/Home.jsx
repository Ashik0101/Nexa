import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Title from "../components/Title";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Hero />
			<LatestCollection />
			<BestSeller />
			<OurPolicy />
			<NewsLetterBox />
			<Footer />
		</>
	);
};

export default Home;
