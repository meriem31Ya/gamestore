"use client";
import Banner from "@/Components/Banner";
import GameList from "@/Components/GameList";
import GenreList from "@/Components/GenreList";
import Header from "@/Components/Header";
import TrendingGames from "@/Components/TrendingGames";
import { gameType } from "@/Utils/TypeGames";
import { getAllGames, getGamesbyId } from "@/services/gamesdata";
import React, { useEffect, useState } from "react";

const Games = () => {
	const [games, setGames] = useState<gameType[]>([]);
	const [search, setsearch] = useState<string>("");
	const [idGenre, setidGenre] = useState<number | null>(null);
	const [gamesGenre, setGamesgenre] = useState<gameType[]>();
	useEffect(() => {
		const getGames = async () => {
			const response = await getAllGames;
			setGames(response.data.results);
		};
		getGames();
	}, []);
	useEffect(() => {
		const getGamesId = async () => {
			const response = await getGamesbyId(idGenre, search);
			setGamesgenre(response.data.results);
		};
		getGamesId();
	}, [idGenre, search]);

	return (
		<div className="flex flex-col gap-3 px-8 ">
			<Header setsearch={setsearch} />
			<div className="grid grid-cols-4">
				<div className=" hidden md:block">
					<GenreList setidGenre={setidGenre} />
				</div>
				<div className="col-span-4 md:col-span-3">
					<Banner game={games?.at(0)} />
					<TrendingGames games={games} />
					<GameList gamesGenre={gamesGenre} />
				</div>
			</div>
		</div>
	);
};

export default Games;
