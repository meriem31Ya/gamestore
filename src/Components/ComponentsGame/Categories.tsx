import { gamedetails } from "@/Utils/TypeGames";
import React from "react";

const Categories = ({ detailsGame }: { detailsGame: gamedetails | null }) => {
	return (
		<div className="flex flex-wrap gap-5 md:gap-10">
			<div className="flex flex-col">
				<h5 className="text-lg md:text-[16px] font-bold  text-gray-200">
					Platform
				</h5>
				<div className="flex gap-1 flex-wrap max-w-[300px]">
					{detailsGame?.parent_platforms?.map((el: any, index: number) => (
						<div key={el.platform.id} className="flex">
							<span className="underline underline-offset-1 cursor-pointer text-blue-500">
								{el.platform.name}
							</span>
							{index !== detailsGame.parent_platforms.length - 1 ? ", " : ""}
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col">
				<h5 className="text-lg md:text-[16px] font-bold text-gray-200">
					Genres
				</h5>
				<div className="flex gap-1 flex-wrap">
					{detailsGame?.genres?.map((el: any, index: number) => (
						<div key={el?.id} className="flex">
							<span className="underline underline-offset-1 cursor-pointer text-blue-500">
								{el?.name}
							</span>
							{index !== detailsGame.genres.length - 1 ? ", " : ""}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Categories;
