import { defineStore } from "pinia";
// import { setItem } from "@/utils/storage";

export const useClientsStore = defineStore('clients', {
  state: () => ({
    clients: []
  }),
  getters: {
    getClient: (state) => {
      return (clientId) => state.clients.find(c => c.id === clientId)
    }
  },
  actions: {
    add() {},
    remove() {},
    set(payload) {
      this.clients = payload
    }
  }
})