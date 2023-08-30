import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import PropTypes from "prop-types";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
	const [searchParams] = useSearchParams();
	const queryTerm = searchParams.get("query");
	const { data: movies } = useFetch(apiPath, queryTerm);

	useTitle(`Seach result for ${queryTerm}`);

	return (
		<main>
			<section className="py-7">
				<p className="text-3xl text-gray-700 dark:text-white">
					{movies.length === 0
						? `No result found for '${queryTerm}'`
						: `Result for '${queryTerm}'`}
				</p>
			</section>
			<section className="py-7">
				<div className="flex justify-start flex-wrap max-lg:justify-center other:justify-evenly">
					{movies.map((movie) => {
						return <Card key={movie.id} movieObj={movie} />;
					})}
				</div>
			</section>
		</main>
	);
};

Search.propTypes = {
	apiPath: PropTypes.string,
	title: PropTypes.string,
};
