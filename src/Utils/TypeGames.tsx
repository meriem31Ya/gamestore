export type genreType = {
	id: number;
	image_background: string;
	name: string;
};

export type gameType = {
	id: number;
	name: string;
	background_image: string;
	rating: number;
	metacritic: number;
	reviews_count: number;
};
export type platforms = {
	platform: platform;
};
export type platform = {
	id: number;
	name: string;
};

export type genre = {
	id: number;
	name: string;
};
export type gamedetails = {
	id: number;
	name: string;
	background_image: string;
	rating: number;
	metacritic: number;
	reviews_count: number;
	description_raw: string;
	rating_top: number;
	genres: genre[];
	parent_platforms: platform[];
	ratings_count: number;
};
export type params = { id: number };
