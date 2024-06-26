import { gameType } from "@/Utils/TypeGames";
import React from "react";

const Banner = ({ game }: { game: gameType | undefined }) => {
	return (
		<div className="relative">
			<div className="absolute bottom-0">
				<h1 className="text-[24px] font-bold">{game?.name}</h1>
				<button className="bg-blue-600 px-8 py-2 rounded-lg">Buy Now</button>
			</div>
			<img
				src={game?.background_image}
				alt=""
				className="md:h-[320px] w-full object-center rounded-lg"
			/>
		</div>
	);
};

export default Banner;
