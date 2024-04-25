
export const search = async (args: string[]): Promise<string> => {
	setTimeout(function () {
		window.open(
			`https://www.google.com/search?q=${args.join(" ")}`,
			"_blank",
		);
	}, 500);

	return "Opening Google Search...";
};
