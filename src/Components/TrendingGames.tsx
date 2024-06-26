import { gameType } from "@/Utils/TypeGames";
import React from "react";
import Game from "./Game";

const TrendingGames = ({ games }: { games: gameType[] }) => {
	return (
		<>
			<h1 className="font-bold  text-[30px]"> Trending Games</h1>
			<div className="grid grid-cols-4 gap-4 xs:grid-cols-1">
				{games?.map(
					(game: gameType, index: number) =>
						index > 0 && index < 5 && <Game key={game.id} game={game} />
				)}
			</div>
		</>
	);
};

export default TrendingGames;
