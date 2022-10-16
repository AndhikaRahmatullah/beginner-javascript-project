import { defineStore } from 'pinia'
import quotes from "../data/qoutes.json";

export const useStore = defineStore('main', {
	state: () => ({
		quote: quotes,
		quoteDisplay: {
			kalimat: "",
			sumber: "",
		},
	}),

	getters: {
	},

	actions: {
	},
})