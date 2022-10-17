<template>
	<div class="home" id="head">
		<div class="max-h-screen transition-all duration-500">
			<!-- <NavigationBar /> -->
			<NightMode />
			<HomeBody />
		</div>
	</div>
</template>

<script>
	import NavigationBar from "../components/NavigationBar.vue";
	import NightMode from "../components/NightMode.vue";
	import HomeBody from "../components/HomeBody.vue";
	export default {
		name: "Home",
		components: {
			NavigationBar,
			NightMode,
			HomeBody,
		},
	};
</script>
