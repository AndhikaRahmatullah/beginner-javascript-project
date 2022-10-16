<template>
	<div class="" id="head">
		<div class="absolute right-[10px] top-[20px]">
			<label class="switch">
				<input type="checkbox" ref="darkMode" @click="modeToggle" />
				<span class="slider round"></span>
			</label>
		</div>
	</div>
</template>
<script>
	export default {
		name: "NightMode",
		methods: {
			modeToggle() {
				const head = document.getElementById("head");
				console.log(this.$refs.darkMode);
				if (this.$refs.darkMode.checked) {
					head.classList.add("dark");
				} else {
					head.classList.remove("dark");
				}
			},
		},
	};
</script>
<style></style>
