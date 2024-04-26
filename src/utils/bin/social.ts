import config from "../../../config.json";

export const github = async (args: string[]): Promise<string> => {
	window.open(`${config.social.github}`);

	return "Opening GitHub...";
};

export const blog = async (args: string[]): Promise<string> => {
	window.open(`${config.social.blog}`);

	return "Opening GitHub...";
};
