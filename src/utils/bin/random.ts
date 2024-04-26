import { getYiyan } from "../../api";

export const random = async (args: string[]): Promise<number> => {
	return await getYiyan();
};
