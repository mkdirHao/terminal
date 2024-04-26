import { parse } from "path";

export const random = async (args: string[]): Promise<number> => {
	return Math.floor(Math.random());
};
