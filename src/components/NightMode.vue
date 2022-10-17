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
				if (this.$refs.darkMode.checked) {
					head.classList.add("dark");
				} else {
					head.classList.remove("dark");
				}
			},
		},
	};
</script>
<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f3b734;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: transparent;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #0891b2;
	}

	input + .slider {
		box-shadow: 0 0 5px #000000;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		background-image: url("../assets/sun.png");
		background-position: center;
		background-size: 27px;
		/* border-radius: 50%; */
	}

	input:checked + .slider.round:before {
		background-image: url("../assets/moon.png");
		background-size: 27px;
		background-position: center;
		/* border-radius: 50%; */
		background-color: transparent;
	}
</style>
