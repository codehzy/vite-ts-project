import { defineStore } from 'pinia'

export const useOtherStore = defineStore('other', {
  state: () => {
    return {
      age: 18
    }
  }
})
