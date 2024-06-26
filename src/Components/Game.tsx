import { gameType } from "@/Utils/TypeGames";
import React from "react";

const Game = ({ game }: { game: gameType }) => {
	return (
		<div>
			<img
				src={game.background_image}
				alt="test"
				className="h-[270px] object-cover rounded-lg"
			/>
			<h2>{game.name}</h2>
		</div>
	);
};

export default Game;
