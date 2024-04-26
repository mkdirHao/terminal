const config = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/utils/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "media",
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
		},
		extend: {
			fontSize: {
				xss: "0.5rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

module.exports = config;
