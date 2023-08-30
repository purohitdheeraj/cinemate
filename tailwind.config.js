export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				darkbg: "#2B2C3F",
				blue: {
					850: "#1e3a8a",
				},
			},
			screens: {
				other: { min: "340px", max: "1200px" },
			},
		},
	},
	plugins: [],
};
