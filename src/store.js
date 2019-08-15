import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)


 export const store = new Vuex.Store({
  state: {
    productPrice: [0,0,0,0,0],
    productPriceKrw :[0,0,0,0,0],
    shippingCost: 0,
    agencyCost: 0,
    currencyRate: 0
  },
  mutations: {
    setProductPrice(state, Obj) {
      state.productPrice.splice(Obj.arrNum-1,1,Obj.multipliedPrice);
    },
    setproductPriceKrw(state, Obj) {
      state.productPriceKrw.splice(Obj.arrNum-1,1,Obj.data);
    },
    setShippingCost(state, cost) {
      state.shippingCost = cost;
    },
    setAgencyCost(state, cost) {
      state.agencyCost = cost;
    },
    setCurrencyRate(state, rate) {
      state.currencyRate = rate;
    },
    splicePrice(state, arrNum) {
      state.productPrice.splice(arrNum-1,1);
    },
    splicePriceKrw(state, arrNum) {
      state.productPriceKrw.splice(arrNum-1,1);
    }
    

  }
})

