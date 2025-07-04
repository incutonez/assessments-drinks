import { reactive } from "vue";
import { Configuration, DrinksApi } from "@incutonez/assessments-drinks-spec";

export const apiConfig = reactive(new Configuration({
	basePath: import.meta.env.VITE_BASE_API || `${location.protocol}//${location.hostname}:3000`,
	baseOptions: {
		headers: {},
	},
}));

export const DrinksAPI = new DrinksApi(apiConfig);
