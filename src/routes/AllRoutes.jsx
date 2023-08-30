import { Routes, Route } from "react-router-dom";
import {
	MovieList,
	MovieDetail,
	Search,
	PageNotFound,
} from "../pages";

export const AllRoutes = () => {
	return (
		<div className="dark:bg-slate-800">
			<main>
				<Routes>
					<Route
						path=""
						element={
							<MovieList
								apiPath="movie/now_playing"
								title="now playing"
							/>
						}
					/>
					<Route
						path="movie/:id"
						element={<MovieDetail />}
					/>
					<Route
						path="movies/popular"
						element={
							<MovieList
								apiPath="movie/popular"
								title="popular"
							/>
						}
					/>
					<Route
						path="movies/top"
						element={
							<MovieList
								apiPath="movie/top_rated"
								title="top rated"
							/>
						}
					/>
					<Route
						path="movies/upcoming"
						element={
							<MovieList
								apiPath="movie/upcoming"
								title="upcoming"
							/>
						}
					/>
					<Route path="search" element={<Search />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</main>
		</div>
	);
};
