import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)


 export const store = new Vuex.Store({
  state: {
    productPrice: 0,
    productPriceKrw :0,
    shippingCost: 0,
    agencyCost: 0,
    currencyRate: 0
  },
  mutations: {
    setCurrencyRate(state, rate) {
      state.currencyRate = rate;
    },
    setProductPrice(state, price) {
      state.productPrice = price
    },
    setproductPriceKrw(state, price) {
      state.productPriceKrw = price
    },
    setShippingCost(state, cost) {
      state.shippingCost = cost
    },
    setAgencyCost(state, cost) {
      state.agencyCost = cost
    },
    

  }
})

