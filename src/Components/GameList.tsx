import { gameType } from "@/Utils/TypeGames";
import React from "react";
import Gamedetails from "./Gamedetails";

const GameList = ({ gamesGenre }: { gamesGenre: gameType[] | undefined }) => {
	return (
		<div className="flex flex-col gap-3">
			<h1 className="text-[30px] font-bold">Games List</h1>
			<div className="grid md:grid-cols-4 gap-5 xs:grid-cols-1 sm:grid-cols-1">
				{gamesGenre?.map((game: gameType) => (
					<Gamedetails key={game.id} game={game} />
				))}
			</div>
		</div>
	);
};

export default GameList;
