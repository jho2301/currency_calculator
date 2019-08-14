<template>
  <div class="layout">
    <div class="header">
      <span class="header-text-foreign">USD</span> 
      <span class="header-text-qty">수량</span> 
      <span class="header-text-krw">KRW</span>
    </div>
    <div v-for="(product, index) of products" :key="product.id" class="input-row">
      <font-awesome-icon v-if="index===1" @click="removeList(index)" class="close-btn" icon="times-circle"></font-awesome-icon>
      <span class="symbol">$</span>
      <input type="text" class="foreign-currency-input" v-model="input">
      <input type="number" v-model="quantity" value="1" min="0" max="99" name="" class="quantity-input">
      <span class="individual-krw">{{individualKrw}}원</span>
    </div>
    <div class="add-btn">
      <font-awesome-icon class="plus-text" icon="plus" /> <span class="plus-text"> 추가하기</span>
    </div>
    <div class="borderline"></div>
    <div class="fare-row">
      <span class="fare-text">배송료</span>
      <span class="symbol">$</span>
      <input class="fare-input" type="text" name="" id="">
      <span class="fare-text">배대지 비용</span>
      <span class="symbol">$</span>
      <input class="fare-input" type="text">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      input: '',
      quantity: 1,
      currencyRate: 0,
      updatedDate: '',
      products: [
        {id:0, price:0, qty:0, individualKrw:0}
      ]
    }
  },
  props: {
    rate: Number
  },
  methods: {
    addComma(num) {
      var regexp = /\B(?=(\d{3})+(?!\d))/g;
      return num.toString().replace(regexp, ',');
    }
  },
  computed: {
    individualKrw(){
      return this.addComma(Math.floor(this.input*this.rate*this.quantity));
    }
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
    &:focus {
      outline:none;
    }
  }

  .input-row {
    width:100%;
    height: 28px;
    display: flex;
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
    padding-right: 0;
    width: 50px;
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
