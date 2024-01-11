import { defineStore } from "pinia";
import { setItem } from "@/utils/storage";
import { productStorageKey } from '@/utils/keys'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: []
  }),
  getters: {
    getProducts: state => state.products,
    getProductById: (state) => {
      return (productId) => state.products.find(p => p.id === productId)
    },
    getProductByName: (state) => {
      return (product) => state.products.find(({ name = '' }) => name.toLocaleUpperCase() === product.toLocaleUpperCase())
    }
  },
  actions: {
    add(payload) {
      this.products.push(payload)
      setItem(productStorageKey, JSON.stringify({ products: this.products }))
    },
    set(payload) {
      this.products = payload
      setItem(productStorageKey, JSON.stringify({ products: this.products }))
    }
  }
})