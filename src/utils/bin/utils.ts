import packageJson from "../../../package.json";
import * as bin from "./index";

export const help = async (args: string[]): Promise<string> => {
	const commands = Object.keys(bin).sort().join(", ");

	return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
	return args.join(" ");
};

export const whoami = async (args: string[]): Promise<string> => {
	return "guest";
};

export const date = async (args: string[]): Promise<string> => {
	return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
	setTimeout(function () {
		window.open("mailto:mkdirhao@qq.com");
	}, 1000);

	return "Opening mail...";
};

export const search = async (args: string[]): Promise<string> => {
	setTimeout(function () {
		window.open(
			`https://www.google.com/search?q=${args.join(" ")}`,
			"_blank",
		);
	}, 500);

	return "Opening Google Search...";
};

export const open = async (args: string[]): Promise<string> => {
	if (args.join("") != "") {
		setTimeout(function () {
			window.open(`https://${args.join("")}`, "_blank");
		}, 1000);

		return `opening ${args.join("")}`;
	} else {
		return "open nothing";
	}
};

export const sudo = async (args?: string[]): Promise<string> => {
	setTimeout(function () {
		window.open("https://www.youtube.com/watch?v=4f4EbF-dS8w");
	}, 1000);

	return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const hao = (args?: string[]): string => {
	return `
	██
	░██
	░██       ██████    ██████
	░██████  ░░░░░░██  ██░░░░██
	░██░░░██  ███████ ░██   ░██
	░██  ░██ ██░░░░██ ░██   ░██
	░██  ░██░░████████░░██████
	░░   ░░  ░░░░░░░░  ░░░░░░						   
	v${packageJson.version}

Type 'help' to see list of available commands.

--------------------------------------
hello, here is mkdirhao.👋
🚲:A man who enjoys cycling like the wind.
📬:mail:mkdirhao@qq.com
======================================
👉<a href="https://mkdirhao.tech" target="_blank">blog</a>👉<a href="https://github.com/mkdirhao/" target="_blank">github</a>
======================================
`;
};
