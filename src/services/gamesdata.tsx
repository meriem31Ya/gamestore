import axios from "axios";

const key = "4528393e0aac421d9dd376fb4b8a36d6";

const axiosCreate = axios.create({
	baseURL: "https://api.rawg.io/api",
	headers: {
		"Content-Type": "application/json",
	},
});
const getGenresList = axiosCreate.get(
	"/genres?key=" + process.env.NEXT_PUBLIC_API_KEY
);
const getAllGames = axiosCreate.get(
	"/games?key=" + process.env.NEXT_PUBLIC_API_KEY
);
const getGamesbyId = (id: number | null, search: string) =>
	axiosCreate.get(
		"/games?key=" +
			process.env.NEXT_PUBLIC_API_KEY +
			"&genres=" +
			id +
			"&search=" +
			search
	);

export { getGenresList, getAllGames, getGamesbyId };
