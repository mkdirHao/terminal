import axios from "axios";
import config from "../../config.json";

export const getRepos = async () => {
	const { data } = await axios.get(
		`https://api.github.com/users/${config.social.github}/repos`,
	);

	return data;
};

export const getGithubBio = async () => {
	const { data } = await axios.get(config.githubBioUrl);

	return data;
};

export const getYiyan = async () => {
	const { data } = await axios.get("https://v1.hitokoto.cn/");

	return { yiyan: `“${data.hitokoto}” — ${data.from_who}` };
};

export const getWeather = async (city: string) => {
	const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

	return data;
};

export const getQuote = async () => {
	const { data } = await axios.get("https://api.quotable.io/random");

	return {
		quote: `“${data.content}” — ${data.author}`,
	};
};
