import { useEffect, useState } from "react";
import { Card } from "../components";

export const MovieList = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchMovies() {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/now_playing?api_key=9f3acf6fe1671ca7ec1c748af26ec36c"
			);
			const data = await response.json();
			setMovies(data.results);
		}

		fetchMovies();
	}, []);

	console.log(movies);

	return (
		<main>
			<section className="py-7">
				<div className="flex justify-start flex-wrap">
					{movies.map((movie) => {
						return <Card key={movie.id} movieObj={movie} />;
					})}
				</div>
			</section>
		</main>
	);
};
