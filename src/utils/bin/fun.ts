import * as cow from "cowsay-browser";
import { getQuote, getYiyan } from "../../api";
import { join } from "path";

// fun cowsay
export const cowsay = async (args?: string[]): Promise<string> => {
	let output = "";

	if (args.length < 1 || args[0] === "") {
		const quote = (await getQuote()).quote;
		return cow.say({ text: quote });
	} else {
		output = args.join(" ");
		return cow.say({ text: output });
	}
};

// random a word from yiyan && quoto
export const random = async (args: string[]): Promise<string> => {
	let output = "";
	const quoto = (await getQuote()).quote;
	const yiyan = (await getYiyan()).yiyan;
	output = "EN quoto: " + quoto + "\n" + "CN:yiyan " + yiyan;
	return output;
};
