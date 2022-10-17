<template>
	<div class="max-w-screen-2xl pb-32 bg-white dark:bg-gray-900 transition-all duration-1000">
		<NavigationBar />
		<Banner />
		<!-- output -->
		<div class="mx-auto w-[340px] md:w-[550px] lg:w-[700px] xl:w-[898px] h-[450px] md:h-[367px] border-8 flex flex-col justify-center items-center border-cyan-600 rounded-lg font-lora shadow-2xl dark:shadow-gray-800">
			<div class="flex justify-center">
				<p class="mx-3 md:mx-10 text-base lg:text-xl xl:text-2xl lg:px-6 lg:py-2.5 w-fit text-center italic dark:text-white transition-all duration-1000">{{ quoteDisplay.kalimat }}</p>
			</div>
			<div class="flex justify-center">
				<p class="mt-5 text-base lg:text-2xl px-6 py-2.5 font-medium italic p-2 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white tracking-wide w-fit">{{ quoteDisplay.sumber }}</p>
			</div>
		</div>
		<div class="mt-10 flex space-x-2 justify-center items-center">
			<!-- categori -->
			<div class="w-[160px] md:w-72 lg:w-96">
				<select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white focus:border-cyan-600 focus:outline-none cursor-pointer" aria-label="Default select example" ref="options">
					<option selected disabled>Kategori</option>
					<option value="kehidupan">Kehidupan</option>
					<option value="asmara">Asmara</option>
					<option value="pendidikan">Pendidikan</option>
					<option value="keluarga">Keluarga</option>
				</select>
			</div>
			<button type="button" class="px-6 py-2.5 inline-block bg-cyan-600 text-white font-medium font-roboto tracking-wider text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg outline-none active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out" @click="changeQuote">Change Quote</button>
		</div>
	</div>
</template>

<script>
	import { useStore } from "../../store/main";
	import { mapActions, mapState } from "pinia";
	import NavigationBar from "../NavigationBar.vue";
	import Banner from "../Banner.vue";

	export default {
		name: "QuotesBody",
		setup() {
			const quote = useStore();
			quote.$subscribe((mutation, state) => {
				localStorage.setItem("cart", JSON.stringify(state));
			});
		},
		components: {
			NavigationBar,
			Banner,
		},

		computed: {
			...mapState(useStore, ["quote", "quoteDisplay"]),
		},

		methods: {
			changeQuote() {
				const quote = this.quote;
				if (this.$refs.options.value === "kehidupan") {
					let match = Math.floor(Math.random() * 30 + 1);
					for (const x of quote) {
						if (x.id === match && x.kategori === "kehidupan") {
							this.quoteDisplay.kalimat = x.kalimat;
							this.quoteDisplay.sumber = x.sumber;
						}
					}
				} else if (this.$refs.options.value === "asmara") {
					let match = Math.floor(Math.random() * 30 + 1);
					for (const x of quote) {
						if (x.id === match && x.kategori === "asmara") {
							this.quoteDisplay.kalimat = x.kalimat;
							this.quoteDisplay.sumber = x.sumber;
						}
					}
				} else if (this.$refs.options.value === "pendidikan") {
					let match = Math.floor(Math.random() * 30 + 1);
					for (const x of quote) {
						if (x.id === match && x.kategori === "pendidikan") {
							this.quoteDisplay.kalimat = x.kalimat;
							this.quoteDisplay.sumber = x.sumber;
						}
					}
				} else if (this.$refs.options.value === "keluarga") {
					let match = Math.floor(Math.random() * 30 + 1);
					for (const x of quote) {
						if (x.id === match && x.kategori === "keluarga") {
							this.quoteDisplay.kalimat = x.kalimat;
							this.quoteDisplay.sumber = x.sumber;
						}
					}
				}
			},
		},
	};
</script>
<style></style>
