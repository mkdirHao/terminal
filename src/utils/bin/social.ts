import config from "../../../config.json";

export const blog = async (args: string[]): Promise<string> => {
	window.open(`${config.social.blog}`);

	return "Opening Blog...";
};
