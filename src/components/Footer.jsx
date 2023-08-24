import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<nav className="bg-white  dark:bg-gray-800  dark:border-slate-800 border-t">
			<footer className="bg-white max-w-screen-xl mx-auto  dark:bg-gray-800">
				<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2023{" "}
						<Link
							target="_blank"
							href="https://flowbite.com/"
							className="hover:underline"
						>
							Cine Mate™
						</Link>
						. All Rights Reserved.
					</span>
					<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
						<li>
							<Link
								target="_blank"
								href="#"
								className="mr-4 hover:underline md:mr-6 "
							>
								Instagram
							</Link>
						</li>
						<li>
							<Link
								target="_blank"
								href="#"
								className="mr-4 hover:underline md:mr-6"
							>
								LinkedIn
							</Link>
						</li>
						<li>
							<Link
								target="_blank"
								href="#"
								className="mr-4 hover:underline md:mr-6"
							>
								Youtube
							</Link>
						</li>
						<li>
							<Link
								target="_blank"
								href="#"
								className="hover:underline"
							>
								Github
							</Link>
						</li>
					</ul>
				</div>
			</footer>
		</nav>
	);
};
