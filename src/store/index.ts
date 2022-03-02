import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
      tel: '17601511258'
    }
  },
  getters: {
    telHidden(): String {
      // getters有缓存特性
      console.log('PhoneHidden被调用了')
      return this.tel.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
  },
  actions: {
    // 在编写actions的时候不能写箭头函数
    increment() {
      this.count++
    }
  }
})
