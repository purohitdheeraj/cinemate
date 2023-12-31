import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import PropTypes from "prop-types";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
	const { data: movies } = useFetch(apiPath);
	useTitle(title);

	return (
		<main>
			<section className="py-7">
				<div className="flex flex-wrap justify-evenly other:justify-evenly ">
					{movies.map((movie) => {
						return <Card key={movie.id} movieObj={movie} />;
					})}
				</div>
			</section>
		</main>
	);
};

MovieList.propTypes = {
	apiPath: PropTypes.string,
	title: PropTypes.string,
};
