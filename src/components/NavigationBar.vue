<template>
	<div id="head">
		<nav class="py-4 w-full flex flex-wrap items-center justify-between border-b-2 shadow-2xl bg-transparent lg:dark:bg-transparent navbar navbar-expand-lg navbar-light">
			<div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
				<button class="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
					</svg>
				</button>
				<div class="collapse navbar-collapse items-center lg:gap-x-10 font-lora" id="navbarSupportedContent">
					<p class="text-xl lg:text-2xl dark:text-white font-medium italic transition-all duration-1000">Beginner Javascript Project</p>
					<!-- Left links -->
					<ul class="navbar-nav flex flex-col list-style-none mr-auto">
						<li class="nav-item lg:px-2 my-1 lg:my-0">
							<router-link to="/" class="px-1 transition-all duration-1000 font-medium dark:text-white" active-class="border-l-2  lg:border-l-0 border-cyan-600 text-cyan-600 dark:text-cyan-600 font-bold">Home</router-link>
						</li>
						<li class="nav-item lg:pr-2 my-1 lg:my-0">
							<router-link to="/quotes" class="px-1 transition-all duration-1000 font-medium dark:text-white" active-class=" border-l-2  lg:border-l-0 border-cyan-600 font-bold text-cyan-600 dark:text-cyan-600">Quotes</router-link>
						</li>
					</ul>
				</div>
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
