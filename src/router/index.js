import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Quotes from '../views/Quotes.vue'
import ComSoonGoogle from '../views/ComSoonGoogle.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/quotes',
		name: 'quotes',
		component: Quotes
	},
	{
		path: '/comsoongoogle',
		name: 'comsoongoogle',
		component: ComSoonGoogle
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
