import PropTypes from "prop-types";

export const Button = (props) => {
	return (
		<button
			className="w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-700 to-blue-700 rounded-lg py-2.5 mr-2 mb-2 font-medium text-white"
			{...props}
		/>
	);
};

Button.propTypes = {
	children: PropTypes.string,
};
