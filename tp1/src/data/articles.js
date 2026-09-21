import { ref } from 'vue'

export const articles = ref([
  { id: 1, title: 'Design d’interfaces', category: 'Design', price: '24,90 €', description: 'Les bases pour concevoir des interfaces claires.' },
  { id: 2, title: 'Vue.js en pratique', category: 'Développement', price: '29,90 €', description: 'Un guide concret pour construire une application Vue.' },
  { id: 3, title: 'Méthodes créatives', category: 'Produit', price: '19,90 €', description: 'Des méthodes simples pour faire émerger de bonnes idées.' },
  { id: 4, title: 'Penser mobile', category: 'Design', price: '22,90 €', description: 'Les principes essentiels du responsive design.' },
  { id: 5, title: 'JavaScript moderne', category: 'Développement', price: '31,90 €', description: 'Les fonctionnalités modernes du langage JavaScript.' },
])

export function addArticle(article) {
  articles.value.push({ ...article, id: Date.now() })
}

export function removeArticle(articleId) {
  articles.value = articles.value.filter((article) => article.id !== articleId)
}