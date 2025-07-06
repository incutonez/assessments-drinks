import { UserLanguage } from "@/constants.ts";

export function toNumber(value: number, unit?: string) {
	let response = new Intl.NumberFormat(UserLanguage).format(value);
	if (unit) {
		response += ` ${unit}`;
	}
	return response;
}
