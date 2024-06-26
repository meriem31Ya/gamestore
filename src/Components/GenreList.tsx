import { genreType } from "@/Utils/TypeGames";
import { getGenresList } from "@/services/gamesdata";
import React, { useEffect, useState } from "react";
import GenreCard from "./GenreCard";

const GenreList = ({
	setidGenre,
}: {
	setidGenre: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
	const [genreList, setgenreList] = useState<genreType[]>([]);
	useEffect(() => {
		const getGenres = async () => {
			const response = await getGenresList;
			setgenreList(response.data.results);
		};
		getGenres();
	}, []);

	return (
		<div className="flex flex-col gap-3">
			<h2>Genres</h2>
			<div className="flex flex-col justify-center">
				{genreList.map((genre: genreType) => (
					<GenreCard key={genre.id} genre={genre} setidGenre={setidGenre} />
				))}
			</div>
		</div>
	);
};

export default GenreList;
