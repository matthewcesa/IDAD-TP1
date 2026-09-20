import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../src/views/HomeView.vue'
import ArticlesView from '../src/views/ArticlesView.vue'
import ArticleDetailView from '../src/views/ArticleDetailView.vue'
import FormulaireArticle from '../src/components/FormulaireArticle.vue'
import Panier from '../src/components/Panier.vue'
import LoginView from '../src/views/LoginView.vue'
import AdminView from '../src/views/AdminView.vue'

const routes = [
	{ path: '/', name: 'Home', component: HomeView },
	{ path: '/articles', name: 'Articles', component: ArticlesView },
	{ path: '/article/:id', name: 'ArticleDetail', component: ArticleDetailView },
	{ path: '/ajouter', name: 'Ajouter', component: FormulaireArticle },
	{ path: '/panier', name: 'Panier', component: Panier },
	{ path: '/login', name: 'Login', component: LoginView },
	{
		path: '/admin',
		name: 'Admin',
		component: AdminView,
		meta: { requiresAuth: true },
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to) => {
	const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true'

	if (to.meta.requiresAuth && !isAuthenticated) {
		return { name: 'Login' }
	}
})

export default router
