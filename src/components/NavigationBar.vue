<template>
	<div id="head">
		<nav class="w-full flex flex-wrap items-center justify-between py-4 bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent navbar navbar-expand-lg navbar-light">
			<div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
				<button class="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
					</svg>
				</button>
				<div class="collapse navbar-collapse items-center lg:gap-x-10 font-lora" id="navbarSupportedContent">
					<p class="text-xl lg:text-2xl dark:text-white font-medium italic transition-all duration-500">Beginner Javascript Project</p>
					<!-- Left links -->
					<ul class="navbar-nav flex flex-col list-style-none mr-auto">
						<li class="nav-item lg:px-2 my-1 lg:my-0">
							<router-link to="/" class="px-1 py-2 transition-all duration-500 font-medium dark:text-white" active-class="border-l-2 lg:border-b-2 lg:border-l-0 border-cyan-600 text-cyan-600 dark:text-cyan-600 font-bold">Home</router-link>
						</li>
						<li class="nav-item lg:pr-2 my-1 lg:my-0">
							<router-link to="/quotes" class="px-1 py-2 transition-all duration-500 font-medium dark:text-white" active-class=" border-l-2 lg:border-b-2 lg:border-l-0 border-cyan-600 font-bold text-cyan-600 dark:text-cyan-600">Quotes</router-link>
						</li>
					</ul>
				</div>
				<!-- night mode -->
				<!-- <div class="">
					<label class="switch">
						<input type="checkbox" ref="darkMode" @click="modeToggle" />
						<span class="slider round"></span>
					</label>
				</div> -->
			</div>
		</nav>
	</div>
</template>
<script>
	export default {
		name: "NaviagationBar",

		data() {
			return {};
		},

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
