import { useEffect } from "react";

export const useTitle = (title) => {
	useEffect(() => {
		document.title = `${title} / Cinemate`;
	}, [title]);

	return null;
};
