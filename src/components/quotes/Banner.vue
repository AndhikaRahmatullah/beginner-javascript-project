<template>
	<div class="" id="head">
		<div class="max-w-screen-2xl h-[550px] bg-cover bg-center lg:bg-right-top" id="banner">
			<NavigationBar />
			<div class="mx-auto md:m-0 pt-[150px] md:pt-[240px] lg:pt-0 md:pl-[20px] lg:pl-0 lg:relative lg:top-[190px] lg:left-[50px] w-fit">
				<p class="text-6xl dark:text-white text-gray-900 font-quotes tracking-wide w-fit transition-all duration-500">
					Quote <br class="md:hidden" />
					Generator
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	import { useStore } from "@/store/main";
	import { mapState, mapActions } from "pinia";

	import NavigationBar from "../NavigationBar.vue";
	export default {
		name: "Banner",
		components: {
			NavigationBar,
		},

		computed: {
			...mapState(useStore, ["statusToggleDark"]),
		},

		methods: {
			...mapActions(useStore, ["modeToggle"]),
		},
	};
</script>

<style>
	#banner {
		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/src/assets/photo-1546015018-4f7d890333a9.png");
	}
</style>
