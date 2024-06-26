import { gameType } from "@/Utils/TypeGames";
import { Flame, MessageCircle, Star } from "lucide-react";
import React from "react";

const Gamedetails = ({ game }: { game: gameType }) => {
	return (
		<div className="sm:w-full">
			<img
				src={game?.background_image}
				alt=""
				className="h-[270px] object-cover rounded-lg   sm:w-full"
			/>
			<h2>
				{game?.name}
				<span className="bg-green-100 text-black">{game?.metacritic}</span>
			</h2>
			<div className="flex gap-3 ">
				<Star fill="yellow" color="yellow" />
				{game?.rating}
				<MessageCircle fill="white" />
				{game?.reviews_count}
				<Flame fill="orange" />
				suggestions
			</div>
		</div>
	);
};

export default Gamedetails;
