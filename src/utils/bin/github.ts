import config from "../../../config.json";
import { getGithubBio, getRepos } from "../../api";

export const repos = async (args: string[]): Promise<string> => {
	const repos = await getRepos();

	return repos
		.filter((repo) => !repo.fork)
		.map(
			(repo) =>
				`${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
		)
		.join("\n");
};

export const github = async (args: string[]): Promise<string> => {
	window.open(`https://github.com/${config.social.github}`);

	return "Opening GitHub...";
};

export const thisrepo = async (args?: string[]): Promise<string> => {
	setTimeout(function () {
		window.open("https://github.com/mkdirhao/terminal/", "_blank");
	}, 1000);

	return "Opening repository...";
};

export const about = async (args: string[]): Promise<string> => {
	return await getGithubBio();
};
