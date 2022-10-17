<template>
	<div class="max-w-screen-2xl" id="head">
		<NightMode />
		<QuotesBody />
		<Footer />
	</div>
</template>

<script>
	import NightMode from "../components/NightMode.vue";
	import QuotesBody from "../components/quotes/QuotesBody.vue";
	import Footer from "../components/Footer.vue";
	export default {
		name: "Quotes",
		components: {
			NightMode,
			QuotesBody,
			Footer,
		},
	};
</script>
