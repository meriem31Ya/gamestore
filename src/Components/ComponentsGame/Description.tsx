import { gamedetails } from "@/Utils/TypeGames";
import React from "react";

const Description = ({ detailsGame }: { detailsGame: gamedetails | null }) => {
	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-2xl md:text-[24px] font-bold text-gray-white">
				About
			</h3>
			<p className="italic text-base md:text-[16px] text-gray-50">
				{detailsGame?.description_raw}
			</p>
		</div>
	);
};

export default Description;
