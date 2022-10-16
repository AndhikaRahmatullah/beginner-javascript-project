<template>
	<div class="home" id="head">
		<div class="bg-red-500 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-700 dark:to-gray-900 h-screen transition-all duration-500">
			<NavigationBar />
			<NightMode />
		</div>
	</div>
</template>

<script>
	import NavigationBar from "../components/NavigationBar.vue";
	import NightMode from "../components/NightMode.vue";
	export default {
		name: "Home",
		components: {
			NavigationBar,
			NightMode,
		},
	};
</script>
