import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.jpg";
import { Button } from "../components";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
	useTitle("Page Not Found / Cinemate");

	return (
		<section className="flex flex-col justify-center px-2">
			<div className="flex flex-col items-center my-4">
				<p className="text-6xl text-gray-700 font-bold dark:text-white">
					{" "}
					404 page, Oops!
				</p>
				<img
					className="rounded my-6 max-w-lg"
					src={PageNotFoundImage}
					alt="404 page not found"
				/>
			</div>
			<div className="flex justify-center">
				<Link to="/">
					<Button>Back To Cinemate</Button>
				</Link>
			</div>
		</section>
	);
};
