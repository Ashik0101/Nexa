import React from "react";

function NewsLetterBox() {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="text-center my-10">
			<p className="text-2xl font-medium text-gray-800">
				Subscribe now & get 20% off
			</p>
			<p className="text-gray-400 mt-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, et!
			</p>

			<form
				className="w-full flex sm:w-2/3 lg:w-1/2 mx-auto mt-6"
				onSubmit={handleSubmit}
			>
				<input
					className="w-full sm:flex outline-none border p-2 mr-2"
					type="email"
					placeholder="Enter your mail.."
					required
				/>
				<button
					type="submit"
					className="bg-black text-white text-xs px-10 py-2"
				>
					Subscribe
				</button>
			</form>
		</div>
	);
}

export default NewsLetterBox;
