<script setup>
import { useCart } from '../composables/useCart'

const { items, removeItem, clear } = useCart()

function removeFromCart(item) {
  if (window.confirm(`Retirer « ${item.title} » du panier ?`)) {
    removeItem(item.id)
  }
}

function emptyCart() {
  if (window.confirm('Vider complètement le panier ?')) {
    clear()
  }
}
</script>

<template>
  <section>
    <p class="eyebrow">Votre sélection</p>
    <h1>Panier</h1>
    <template v-if="items.length">
      <ul class="cart-list">
        <li v-for="item in items" :key="item.id">
          <span>{{ item.title }} × {{ item.quantity }}</span>
          <button type="button" @click="removeFromCart(item)">Retirer</button>
        </li>
      </ul>
      <button type="button" @click="emptyCart">Vider le panier</button>
    </template>
    <template v-else>
      <p>Votre panier est vide pour le moment.</p>
      <RouterLink to="/articles">Parcourir les articles</RouterLink>
    </template>
  </section>
</template>

<style scoped>
.eyebrow { color: #d3543f; font-weight: 700; text-transform: uppercase; }
a { color: #d3543f; font-weight: 700; }
.cart-list { list-style: none; margin: 2rem 0; max-width: 600px; padding: 0; }
.cart-list li { align-items: center; border-bottom: 1px solid #d9e2ec; display: flex; justify-content: space-between; padding: 1rem 0; }
button { background: #17202a; border: 0; border-radius: 4px; color: white; cursor: pointer; font-weight: 700; padding: 0.65rem 0.9rem; }
</style>