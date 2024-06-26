import React from "react";

const WrappelAll = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col-reverse md:flex-row border-2 p-6 md:px-36 md:py-12 gap-6 md:gap-16 rounded-lg shadow-lg">
			{children}
		</div>
	);
};

export default WrappelAll;
