<template>
	<div class="flex flex-col md:flex-row justify-center items-center text-center md:text-start md:gap-10 h-screen bg-white dark:bg-gray-900 transition-all duration-1000" id="head">
		<div class="font-roboto text-lg md:text-5xl lg:text-7xl text-gray-900 dark:text-white transition-all duration-1000">
			<p class="text-3xl md:text-5xl lg:text-7xl font-light md:font-thin">BEGINNER</p>
			<p class="text-3xl md:text-5xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text dark:text-white transition-all duration-1000">JAVASCRIPT</p>
			<p class="text-3xl md:text-5xl lg:text-7xl font-light md:font-thin">PROJECT</p>
			<p class="text-xs md:text-base font-thin mt-1 mb-5 md:mt-0 italic">by Andhika Rahmatullah</p>
			<div class="mb-5 md:mb-0 md:mt-5 text-2xl font-normal -tracking-wide flex flex-col md:flex-row justify-start items-center">
				<router-link to="/quotes" class="dark:hidden">
					<img src="../assets/rightBlack.png" alt="" class="hover:animate-pulse w-[40px] md:w-full" />
				</router-link>
				<router-link to="/quotes" class="hidden dark:block">
					<img src="../assets/rightWhite.png" alt="" class="hover:animate-pulse w-[40px] md:w-full" />
				</router-link>
			</div>
		</div>

		<img src="../assets/home.jpg" alt="" class="w-[200px] md:w-[200px] lg:w-[350px] shadow-2xl dark:shadow-gray-800 transition-all duration-1000" />
	</div>
</template>
<script>
	export default {
		name: "HomeBody",
		data() {
			return {};
		},
	};
</script>
<style></style>
