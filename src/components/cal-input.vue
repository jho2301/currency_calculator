<template>
  <div class="layout">
    <div class="header">
      <span class="header-text-foreign">USD</span> 
      <span class="header-text-qty">수량</span> 
      <span class="header-text-krw">KRW</span>
    </div>
    <transition-group name="list">
      <div v-for="arrNum of max" :key="arrNum" class="input-row">
        <font-awesome-icon  @click="removeList(arrNum)" v-if="arrNum !== 1" class="close-btn" icon="times-circle"></font-awesome-icon>
        <span class="symbol">$</span>
        <input type="text" class="foreign-currency-input" v-model="insertedPrice[arrNum-1]" @input="setCost(arrNum, quantity[arrNum-1], insertedPrice[arrNum-1],'setProductPrice')">
        <input type="number" v-model="quantity[arrNum-1]"  @input="setCost(arrNum, quantity[arrNum-1], insertedPrice[arrNum-1],'setProductPrice')" value="1" min="0" max="99" name="" class="quantity-input">
        <span class="individual-krw">{{ priceKrw[arrNum-1] }}원</span>
      </div>
    </transition-group>
    <div class="add-btn" v-show="max!==5" @click="addList">
      <font-awesome-icon class="plus-text" icon="plus" /> <span class="plus-text"> 추가하기</span>
    </div>
    <div class="borderline"></div>
    <div class="fare-row">
      <span class="fare-text">배송료</span>
      <span class="symbol">$</span>
      <input class="fare-input" type="text" @input="setShippingCost($event,'setShippingCost')">
      <span class="fare-text">배대지 비용</span>
      <span class="symbol">$</span>
      <input class="fare-input" type="text"  @input="setShippingCost($event, 'setAgencyCost')" >
    </div>
  </div>
</template>

<script>
import {addComma, purifyNum} from '@/common'

export default {
  data(){
    return {
      max:1,
      insertedPrice: ['','','','',''],
      quantity: [1,1,1,1,1],
      priceKrw: [0,0,0,0,0],
      currencyRate: 0,
      updatedDate: '',
    }
  },
  methods: {
     setCost(arrNum, qty, price, stateToSet) {
      const purePrice = purifyNum(price);
      const multipliedPrice = purePrice * qty
      this.$store.commit(stateToSet, {arrNum, multipliedPrice});

      this.setCostKrw(arrNum);
    },
    setShippingCost(event, stateToSet) {
      const purePrice = purifyNum(event.target.value);
      this.$store.commit(stateToSet, purePrice);
    },
    setCostKrw(arrNum) {
      let data = Math.floor(this.$store.state.productPrice[arrNum-1] * this.$store.state.currencyRate);
      this.$store.commit('setproductPriceKrw', {arrNum, data})
      data = addComma(data);
      this.priceKrw.splice(arrNum-1, 1, data);
    },
    addList() {
      if(this.max < 5) {
        this.max++
      }
    },
    removeList(arrNum) {
      if(this.max > 1) {
        this.insertedPrice.splice(arrNum-1,1);
        this.quantity.splice(arrNum-1,1);
        this.quantity.push(1);
        this.priceKrw.splice(arrNum-1,1);
        this.priceKrw.push(0);
        this.$store.commit('splicePrice', arrNum);
        this.$store.commit('splicePriceKrw', arrNum);
        this.max--;
      }
      
    }
  },
  computed: {
    
      },
}
</script>

<style lang="scss" scoped >
  .layout {
    background: rgb(67, 92, 109);
    display: flex;
    flex-direction: column;
  }

  .header {
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
  }

  .header-text {
    font-family: 'Noto Sans KR';
    font-weight: 300;
    height: 100%;
    line-height: 64px;
    letter-spacing: 2px;
    font-size: 0.9rem;
    color: white;
  }

  .header-text-foreign{
    @extend .header-text;
    width: 150px;
    margin-right: 46px;
    padding-left: 30px;
    text-align: center;
  }


  .header-text-qty {
    @extend .header-text;
    width: 50px;
    text-align: center;
  }

  .header-text-krw {
    @extend .header-text;
    flex-grow:1;
    text-align: center;
  }

  .input {
    border-radius: 10px;
    text-align: right;
    line-height: 10px;
    padding-right: 10px;
    color: rgb(36, 36, 36);
    &:focus {
      outline:none;
    }
  }

  .input-row {
    width:100%;
    height: 28px;
    display: flex;
    margin-bottom: 10px;
  }
  
  .list-enter, .list-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }

  .list-enter-active, .list-leave-active {
    transition: all, 0.7s ease;
  }

  .close-btn {
    color : rgb(238, 165, 180);
    position: absolute;
    margin-top: 6px;
  }

  .symbol{
    width:20px;
    font-family: 'Noto Sans KR';
    font-weight: 300;
    font-size: 1.3rem;
    text-align: right;
    padding-right: 4px; 
    color: white;
    line-height: 26px;
    margin-left:20px;
  }

  .foreign-currency-input {
    @extend .input;
    width: 94px;
    margin-right: 62px;
  }

  .quantity-input {
    @extend .input;
    padding-left: 14px;
    padding-right: 0;
    width: 50px;
    text-align: center;
  }

  .individual-krw {
    font-family: 'Noto Sans KR';
    font-weight: 300;
    font-size: 1.05rem;
    color:white;
    letter-spacing: 0.6px;
    margin-left: auto;
    margin-right: 40px;
    line-height: 26px;
  }

  .add-btn {
    background: rgb(176, 192, 240) ;
    height: 28px;
    border-radius: 10px;
    box-shadow: 0 3px 5px rgba(20, 8, 41, 0.274), inset 0 2px 2px rgba(255, 246, 246, 0.226),inset 0 -2px 2px rgba(67, 59, 68, 0.226);
    font-weight: 600;
    text-align: center;
    align-self: center;
    width: 76%;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
      background: rgb(119, 143, 216);
      box-shadow: 0 3px 5px rgba(20, 8, 41, 0.274);
      .plus-text{
        color: rgb(209, 224, 243);
      }
    }
    &:active {
      background: rgb(106, 128, 194);
      box-shadow:inset 0 2px 2px rgba(37, 14, 75, 0.274);
      .plus-text{
        color: rgb(189, 204, 219);
      }
    }
  }

  .plus-text {
    line-height: 28px;
    font-size: 0.9rem;
    color:  rgb(42, 58, 70);
    font-family: 'Noto Sans KR';
    font-weight: 600;
  }

  .borderline{
    align-self: center;
    margin-top: auto;
    width: 90%;
    height: 3px;
    background: rgba(120, 159, 207, 0.2);
    border-top: 1px solid rgba(0, 0, 0, 0.349);
    border-radius: 10px;
  }

  .fare-row {
    display: flex;
    width: 100%;
    height: 28px;
     margin:16px 0 10px;
  }

  .fare-text {
    color: white;
    font-family: 'Noto Sans KR';
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 28px;
    margin-left: 32px;
    font-size: 0.95rem;
    & + .symbol  {
      margin-left: 8px;
    }
  }

  .fare-input {
    @extend .input;
    width: 94px;
  }




</style>
