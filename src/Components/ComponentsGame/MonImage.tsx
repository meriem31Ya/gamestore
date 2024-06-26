import { gamedetails } from "@/Utils/TypeGames";
import Image from "next/image";
import React from "react";

const MonImage = ({ detailsGame }: { detailsGame: gamedetails | null }) => {
	return (
		<div className="flex flex-1 relative h-[200px] md:h-[400px] mb-6 md:mb-0">
			<Image
				className="rounded-lg object-cover shadow-md w-full"
				src={detailsGame?.background_image}
				alt=""
				fill
			/>
		</div>
	);
};

export default MonImage;
