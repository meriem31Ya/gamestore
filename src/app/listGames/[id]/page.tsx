"use client";
import Categories from "@/Components/ComponentsGame/Categories";
import Description from "@/Components/ComponentsGame/Description";
import MonImage from "@/Components/ComponentsGame/MonImage";
import Rating from "@/Components/ComponentsGame/Rating";
import WrappelAll from "@/Components/ComponentsGame/WrappelAll";
import Wrapper from "@/Components/ComponentsGame/Wrapper";
import { gamedetails, params } from "@/Utils/TypeGames";
import { getGamedetails } from "@/services/gamesdata";
import React, { useEffect, useState } from "react";

const Details = ({ params }: { params: params }) => {
	const [detailsGame, setdetailsGame] = useState<gamedetails | null>(null);
	const [loading, setloading] = useState(false);
	const monId = params.id;
	useEffect(() => {
		const getGame = async () => {
			setloading(false);
			const response = await getGamedetails(monId);
			setdetailsGame(response.data);
			setloading(true);
		};
		getGame();
	}, []);

	if (loading) {
		return (
			<WrappelAll>
				<Wrapper>
					<h1 className="text-3xl md:text-[48px] font-bold text-white-800">
						{detailsGame?.name}
					</h1>

					<Rating detailsGame={detailsGame} />
					<Categories detailsGame={detailsGame} />
					<Description detailsGame={detailsGame} />
				</Wrapper>
				<MonImage detailsGame={detailsGame} />
			</WrappelAll>
		);
	}
};

export default Details;
