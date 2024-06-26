import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return <div className="flex flex-1 flex-col gap-5">{children}</div>;
};

export default Wrapper;
