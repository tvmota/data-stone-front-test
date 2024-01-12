import { defineStore } from "pinia";
import { setItem } from "@/utils/storage";
import { associateStorageKey } from '@/utils/keys'

export const useAssociationsStore = defineStore('associations', {
  state: () => ({
    associations: []
  }),
  getters: {
    getAssociationById: (state) => {
      return (associationId) => state.associations.find(a => a.id === associationId)
    },
    getAssociationByClientId: (state) => {
      return (idClient) => state.associations.find(a => a.idClient === idClient)
    }
  },
  actions: {
    add(payload) {
      this.associations.push(payload)
      setItem(associateStorageKey, JSON.stringify({ associations: this.associations }))
    },
    edit(idClient, products) {
      const associationIdx = this.associations.findIndex(a => a.idClient === idClient)
      this.associations[associationIdx].idProducts = products
      setItem(associateStorageKey, JSON.stringify({ associations: this.associations }))
    },
    set(payload) {
      this.associations = payload
      setItem(associateStorageKey, JSON.stringify({ associations: this.associations }))
    }
  }
})