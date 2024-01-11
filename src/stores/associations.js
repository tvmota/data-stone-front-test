import { defineStore } from "pinia";
// import { setItem } from "@/utils/storage";

export const useAssociationsStore = defineStore('associations', {
  state: () => ({
    associations: []
  }),
  getters: {
    getAssociation: (state) => {
      return (associationId) => state.associations.find(a => a.id === associationId)
    }
  },
  actions: {
    add() {},
    remove() {},
    set(payload) {
      this.associations = payload
    }
  }
})