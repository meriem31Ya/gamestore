import { gamedetails } from "@/Utils/TypeGames";
import React from "react";

const Rating = ({ detailsGame }: { detailsGame: gamedetails | null }) => {
	return (
		<div className="flex flex-wrap gap-5 md:gap-10">
			<div className="flex flex-col">
				<span className="text-2xl md:text-[36px] font-bold text-green-600">
					Exceptional
				</span>
				<span className="text-xs md:text-[12px] cursor-pointer uppercase underline underline-offset-1 text-gray-300">
					{detailsGame?.ratings_count} rating
				</span>
			</div>

			<div className="flex flex-col">
				<span className="text-2xl md:text-[36px] font-bold text-blue-600">
					#{detailsGame?.ratings_count}
				</span>
				<span className="text-xs md:text-[12px] cursor-pointer uppercase underline underline-offset-1 text-gray-300">
					Rating
				</span>
			</div>

			<div className="flex flex-col">
				<span className="text-2xl md:text-[36px] font-bold text-red-600">
					#{detailsGame?.rating_top}
				</span>
				<span className="text-xs md:text-[12px] cursor-pointer uppercase underline underline-offset-1 text-gray-300">
					TOP 2024
				</span>
			</div>
		</div>
	);
};

export default Rating;
