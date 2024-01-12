import { defineStore } from "pinia";
import { setItem } from "@/utils/storage";
import { clientStorageKey } from '@/utils/keys'

export const useClientsStore = defineStore('clients', {
  state: () => ({
    clients: []
  }),
  getters: {
    getClients: state => state.clients,
    getClientById: (state) => {
      return (clientId) => state.clients.find(c => c.id === clientId)
    },
    getClientByName: (state) => {
      return (client) => state.clients.find(({ name = '' }) => name.toLocaleUpperCase() === client.toLocaleUpperCase())
    }
  },
  actions: {
    add(payload) {
      this.clients.push(payload)
      setItem(clientStorageKey, JSON.stringify({ clients: this.clients }))
    },
    set(payload) {
      this.clients = payload
      setItem(clientStorageKey, JSON.stringify({ clients: this.clients }))
    }
  }
})