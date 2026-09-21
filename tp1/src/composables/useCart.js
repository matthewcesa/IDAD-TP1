import { computed, ref } from 'vue'

const storageKey = 'articlehub-cart'
const items = ref(loadItems())

function loadItems() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || '[]')
  } catch {
    return []
  }
}

function persist() {
  localStorage.setItem(storageKey, JSON.stringify(items.value))
}

export function useCart() {
  const count = computed(() => items.value.reduce((total, item) => total + item.quantity, 0))

  function addItem(article) {
    const existingItem = items.value.find((item) => item.id === article.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      items.value.push({ ...article, quantity: 1 })
    }

    persist()
  }

  function removeItem(articleId) {
    items.value = items.value.filter((item) => item.id !== articleId)
    persist()
  }

  function clear() {
    items.value = []
    persist()
  }

  return { items, count, addItem, removeItem, clear }
}